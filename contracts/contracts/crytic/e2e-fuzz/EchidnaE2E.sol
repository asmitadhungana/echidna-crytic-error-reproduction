// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol";

contract EcdhinaE2E {
  VRFCoordinatorV2Mock constant VRF = VRFCoordinatorV2Mock(0x25B8Fe1DE9dAf8BA351890744FF28cf7dFa8f5e3);

  constructor() {}

  function testDummy(uint256 number) public {
    assert(true);
  }
}