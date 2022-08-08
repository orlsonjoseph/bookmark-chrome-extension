// import { setToolbarIcon } from 'common/interface'
// import { fetchStoredTags, getOnSaveTags } from 'common/api'
// import { getConfiguration, setConfiguration } from '../../../common/interface'
// import { deriveItemData } from 'common/helpers'

// import { UPDATE_ITEM_PREVIEW } from 'actions'
// import { UPDATE_STORED_TAGS } from 'actions'
// import { SUGGESTED_TAGS_SUCCESS } from 'actions'

export async function saveSuccess(tabId, payload) {
  const { resolved_url, given_url, isLink } = payload;
  const url = resolved_url || given_url;

  // if (!isLink) setToolbarIcon(tabId, true)

  // // Get item preview
  // getItemPreview(tabId, payload)

  // // Get list of users tags for typeahead
  // getStoredTags(tabId)

  // // Premium: Request suggested tags
  // getTagSuggestions(url, tabId)
}

// async function getItemPreview(tabId, payload) {
//     const item = await deriveItemData(payload)

//     chrome.tabs.sendMessage(tabId, {
//         action: UPDATE_ITEM_PREVIEW,
//         payload: { item },
//     })
// }
