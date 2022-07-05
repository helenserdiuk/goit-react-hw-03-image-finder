import { Component } from 'react';
import { getPhoto } from '../shared/services/pixabayApi';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from '../shared/components/Modal';
import Loader from './Loader';
import Button from './Button';

export default class App extends Component {
  state = {
    items: [],
    search: '',
    page: 1,
    error: null,
    loading: false,
    showModal: false,
    modalContent: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, search } = this.state;
    if (page !== prevState.page || search !== prevState.search) {
      this.fetchPhoto();
    }
  }

  async fetchPhoto() {
    this.setState({
      loading: true,
    });
    const { search, page } = this.state;
    try {
      const data = await getPhoto(search, page);
      this.setState(({ items }) => {
        return {
          items: [...items, ...data.hits],
        };
      });
    } catch (error) {
      this.setState({
        error: error,
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleFormSubmit = ({ input }) => {
    const { search } = this.state;
    if (input !== search) {
      this.setState({
        search: input,
        items: [],
        page: 1,
      });
    }
  };

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  showModal = (url, tags) => {
    this.setState({
      showModal: true,
      modalContent: {
        src: url,
        alt: tags,
      },
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { loadMore, handleFormSubmit, closeModal } = this;
    const { items, loading, error, showModal, modalContent } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={handleFormSubmit} />
        {!error && <ImageGallery items={items} onClick={showModal} />}
        {loading && <Loader />}
        {!loading && items.length >= 12 && <Button onClick={loadMore} />}
        {showModal && (
          <Modal onClose={closeModal}>
            <img src={modalContent.src} alt={modalContent.alt} />
          </Modal>
        )}
      </div>
    );
  }
}
