function FooterCopyright() {
  return (
    <div
      className="pb-5 pt-4 text-center text-gray-500 text-sm"
      data-testid="footer-copyright"
    >{`2016-${new Date().getFullYear()} © ООО «Аренда Неба»`}</div>
  );
}

export { FooterCopyright };
