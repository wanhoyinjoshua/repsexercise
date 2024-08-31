export function getReps(ExVideoArray){
    const initialValue = 0;
    const sumWithInitial = ExVideoArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue.reps,
        initialValue,
      );

    return sumWithInitial
}