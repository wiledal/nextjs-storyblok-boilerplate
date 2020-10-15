import SbEditable from "storyblok-react";
import GridModule from "../modules/grid-module";
import TeaserModule from "../modules/teaser-module";

let library = {
  teaser: TeaserModule,
  grid: GridModule,
};

export default function ModuleDelegator({ modules }) {
  return (
    <>
      {modules?.map((module) => {
        let Module = library[module.component];
        if (Module)
          return (
            <SbEditable content={module} key={module._uid}>
              <Module {...module} />
            </SbEditable>
          );

        return null;
      })}
    </>
  );
}
