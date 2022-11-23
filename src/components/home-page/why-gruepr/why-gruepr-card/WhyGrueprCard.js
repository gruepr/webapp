function WhyGrueprCards(props) {
  return (
    <div class="bg-accent-50 border-solid border-accent-200 border-2 p-7 space-y-4">
      <img
        class="object-none object-center m-auto"
        src={props.img}
        alt="icon"
      />
      <div class="space-y-2">
        <h3 class="heading3 text-center">{props.header}</h3>
        <p class="body text-center">{props.info}</p>
      </div>
    </div>
  );
}
export default WhyGrueprCards;
