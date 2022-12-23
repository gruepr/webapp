function WhyGrueprCards(props) {
  return (
    <div
      className="bg-accent-50 border-solid border-accent-200 border-2 
      laptop:p-7 laptop:py-8 laptop:space-y-4
      mobile:p-[16px]"
    >
      <img
        className="object-none object-center m-auto"
        src={props.img}
        alt={props.alt}
      />
      <div className="space-y-2">
        <h3 className="heading3 text-center">{props.header}</h3>
        <p className="body text-center">{props.info}</p>
      </div>
    </div>
  );
}
export default WhyGrueprCards;
