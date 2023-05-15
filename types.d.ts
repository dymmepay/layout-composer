declare module "layout-composer" {
  export interface ComposerFunction {
    (args: string): string;
  }
  export interface ComposerItem {
    name: string;
    key: string;
    fn: ComposerFunction;
  }
  export type Composers = ComposerItem[];
  export function init(composers?: Composers): {
    render: (layout: string[]) => string;
    composers: ComposerItem[];
    defineComposer(name: string, key: string, fn: ComposerFunction): void;
  };
}
