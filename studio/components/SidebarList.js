import S from '@sanity/desk-tool/structure-builder';
import { MdStar } from 'react-icons/md';

function SidebarList() {
  return S.list()
    .title('R-Speed Motors')
    .items([
      S.listItem()
        .title('Spotlight')
        .id('spotlightItems')
        .icon(MdStar)
        .child(S.editor().schemaType('spotlight').documentId('spotlightItems')),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'spotlight'
      ),
    ]);
}

export default SidebarList;
