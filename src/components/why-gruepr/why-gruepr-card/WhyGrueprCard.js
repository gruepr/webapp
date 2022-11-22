function WhyGrueprCards(props) {
  return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div class=" bg-accent-50  rounded overflow-hidden shadow-lg">
        <img
          class="object-none object-center m-auto"
          src={props.img}
          alt="icon"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 dmsans dark">{props.header}</div>
          <p class="text-gray-700 text-base dmsans dark">{props.info}</p>
        </div>
      </div>
    </div>
  );
}
export default WhyGrueprCards;
