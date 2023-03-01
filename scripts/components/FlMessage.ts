import FlMessageDesign from 'generated/my-components/FlMessage';

export default class FlMessage extends FlMessageDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
