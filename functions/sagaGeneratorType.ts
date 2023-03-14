type WhatYouYield = "foo";
type WhatYouReturn = "bar";
type WhatYouAccept = "baz";

function* myfun(): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  const myYield = "foo"; //type of myYield is WhatYouYield
  const myAccepted = yield myYield; //type of myAccepted is WhatYouAccept
  return "baz"; //type of this value is WhatYouReturn
}
