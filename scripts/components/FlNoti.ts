import FlNotiDesign from 'generated/my-components/FlNoti';

export default class FlNoti extends FlNotiDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
