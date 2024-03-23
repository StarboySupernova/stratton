import axios from 'axios';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';

import { SearchModalContext } from '../../contexts/searchModalContext';
import { SearchModalStyles } from '../../styles/search/SearchModalStyles';
import ActionButton from '../buttons/ActionButton';
import SearchResult from './SearchResult';
import SearchField from './SearchField';

const query = graphql`
  {
    localSearchBlogs {
      publicStoreURL
      publicIndexURL
    }
    localSearchCategories {
      publicStoreURL
      publicIndexURL
    }
    localSearchAuthors {
      publicStoreURL
      publicIndexURL
    }
    localSearchServices {
      publicStoreURL
      publicIndexURL
    }
  }
`;

function Search() {
  const { isSearchModalOpen } = useContext(SearchModalContext); // extracting state from context
  const [searchQuery, setSearchQuery] = useState('');
  const { closeSearchModal } = useContext(SearchModalContext);
  const [blogsIndexStore, setBlogsIndexStore] = useState(null);
  const [categoriesIndexStore, setCategoriesIndexStore] = useState(null);
  const [authorsIndexStore, setAuthorsIndexStore] = useState(null);
  const [servicesIndexStore, setServicesIndexStore] = useState(null);
  const data = useStaticQuery(query);
  console.log(data);

  useEffect(() => {
    if (isSearchModalOpen) {
      /* hiding scrollview when searching, & clearing previous search queries */
      document.body.style.overflow = 'hidden';
      setSearchQuery('');
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [
    isSearchModalOpen,
  ]); /* whenever searchmodalopen changes, the functionality here is run */

  const {
    publicStoreURL: blogsPublicStoreURL,
    publicIndexURL: blogsPublicIndexURL,
  } = data.localSearchBlogs;
  const {
    publicStoreURL: categoriesPublicStoreURL,
    publicIndexURL: categoriesPublicIndexURL,
  } = data.localSearchCategories;
  const {
    publicStoreURL: authorsPublicStoreURL,
    publicIndexURL: authorsPublicIndexURL,
  } = data.localSearchAuthors;

  const {
    publicStoreURL: servicesPublicStoreURL,
    publicIndexURL: servicesPublicIndexURL,
  } = data.localSearchServices;

  const handleOnFocus = async () => {
    if (
      blogsIndexStore &&
      categoriesIndexStore &&
      authorsIndexStore &&
      servicesIndexStore
    )
      return;
    const [
      /* destructuring here is giving an alias for the data returned by Promise.all, and the order matters because they correspond */
      { data: blogsIndex },
      { data: blogsStore },
      { data: categoriesIndex },
      { data: categoriesStore },
      { data: authorsIndex },
      { data: authorsStore },
      { data: servicesIndex },
      { data: servicesStore },
    ] = await Promise.all([
      axios.get(`${blogsPublicIndexURL}`),
      axios.get(`${blogsPublicStoreURL}`),
      axios.get(`${categoriesPublicIndexURL}`),
      axios.get(`${categoriesPublicStoreURL}`),
      axios.get(`${authorsPublicIndexURL}`),
      axios.get(`${authorsPublicStoreURL}`),
      axios.get(`${servicesPublicIndexURL}`),
      axios.get(`${servicesPublicStoreURL}`),
    ]);
    /* setting state using data destructured after being received from the Promise */
    setBlogsIndexStore({
      index: blogsIndex,
      store: blogsStore,
    });
    setCategoriesIndexStore({
      index: categoriesIndex,
      store: categoriesStore,
    });
    setAuthorsIndexStore({
      index: authorsIndex,
      store: authorsStore,
    });
    setServicesIndexStore({
      index: servicesIndex,
      store: servicesStore,
    });
  };

  if (!isSearchModalOpen) return null;
  return (
    <SearchModalStyles>
      <div className="modal__container">
        <ActionButton className="close" onClick={() => closeSearchModal()}>
          <MdClose />
        </ActionButton>
        <SearchField
          value={searchQuery}
          setValue={setSearchQuery}
          onFocus={handleOnFocus}
        />
        {searchQuery &&
          blogsIndexStore &&
          categoriesIndexStore &&
          authorsIndexStore &&
          servicesIndexStore && (
            <div className="search__result">
              <SearchResult
                searchQuery={searchQuery}
                blogsIndexStore={blogsIndexStore}
                categoriesIndexStore={categoriesIndexStore}
                authorsIndexStore={authorsIndexStore}
                servicesIndexStore={servicesIndexStore}
              />
            </div>
          )}
      </div>
    </SearchModalStyles>
  );
}

export default Search;
