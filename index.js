function distanceFromHqInBlocks(pickUpLocation) {
    //returns the number of blocks given a value
    if (pickUpLocation > 42) {
        return pickUpLocation - 42;
     } else {
        return 42 - pickUpLocation;
    }
}


function distanceFromHqInFeet(pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation) * 264;

}


  function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264
    } else {
        return (start - destination) * 264
    }
  }


  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400) {
        return 0;
      } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
      } else if (distance > 2000 && distance < 2500) {
        return 25;
      } else {
        return 'cannot travel that far';
      }

}
