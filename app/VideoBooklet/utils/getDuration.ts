export function getDuration(ExVideoArray){
    const initialValue = 0;
    const sumWithInitial = ExVideoArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue.duration,
        initialValue,
      );

    return Math.round(sumWithInitial/60)

}