import React from 'react';
import CustomSearchBar from '@site/src/components/custom-search/CustomSearchBar';

// Swizzle wrapper for the theme search bar. Renders Kite's segmented
// "Ask AI | Search" control instead of the default search input.
export default function SearchBarWrapper() {
  return <CustomSearchBar />;
}
