import React from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import {
  AuthorSearchResultItem,
  BlogSearchResultItem,
  CategorySearchResultItem,
  ServiceSearchResultItem,
} from './SearchResultItem';
import ParagraphText from '../typography/ParagraphText';

function SearchResult({
  searchQuery,
  blogsIndexStore,
  categoriesIndexStore,
  authorsIndexStore,
  servicesIndexStore,
}) {
  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store
  );
  const categoriesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(categoriesIndexStore.index),
    categoriesIndexStore.store
  );
  const authorsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(authorsIndexStore.index),
    authorsIndexStore.store
  );
  const servicesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(servicesIndexStore.index),
    servicesIndexStore.store
  );

  if (
    blogsResult.length === 0 &&
    categoriesResult.length === 0 &&
    authorsResult.length === 0 &&
    servicesResult.length === 0
  ) {
    return <ParagraphText>No Result Found.</ParagraphText>;
  }

  return (
    <>
      {blogsResult.length > 0 && (
        <>
          <ParagraphText>Spotlight</ParagraphText>
          {blogsResult.map((result) => (
            <BlogSearchResultItem key={result.id} blog={result} />
          ))}
        </>
      )}
      {categoriesResult.length > 0 && (
        <>
          <ParagraphText>Category</ParagraphText>
          {categoriesResult.map((result) => (
            <CategorySearchResultItem key={result.id} category={result} />
          ))}
        </>
      )}
      {authorsResult.length > 0 && (
        <>
          <ParagraphText>Authors</ParagraphText>
          {authorsResult.map((result) => (
            <AuthorSearchResultItem key={result.id} author={result} />
          ))}
        </>
      )}
      {servicesResult.length > 0 && (
        <>
          <ParagraphText>Technologies</ParagraphText>
          {servicesResult.map((result) => (
            <ServiceSearchResultItem key={result.id} service={result} />
          ))}
        </>
      )}
    </>
  );
}

export default SearchResult;
