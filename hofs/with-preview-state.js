export function withPreviewState(getProps) {
  return async (ctx) => {
    let data = await getProps(ctx);

    data.props.preview = ctx.preview || false;

    return data;
  };
}
