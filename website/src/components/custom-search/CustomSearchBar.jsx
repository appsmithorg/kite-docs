import React from 'react';
import OriginalSearchBar from '@theme-original/SearchBar';
import AskAIComingSoon from '@site/src/components/ask-ai/AskAIComingSoon';
import '@site/src/components/custom-search/css/CustomSearch.css';

// Segmented search control: an "Ask AI" option (coming soon) sitting beside
// the working local/offline search input. The Search half is the original
// theme SearchBar provided by @easyops-cn/docusaurus-search-local.
const CustomSearchBar = () => {
  return (
    <div className="kite-segmented-search">
      <AskAIComingSoon />
      <div className="kite-search-slot">
        <OriginalSearchBar />
      </div>
    </div>
  );
};

export default CustomSearchBar;
