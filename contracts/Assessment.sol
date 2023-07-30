// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Assessment {
    uint256 public value;

    event ValueUpdated(uint256 newValue);

    constructor(uint256 initialValue) {
        value = initialValue;
    }

    function updateValue(uint256 newValue) public {
        value = newValue;
        emit ValueUpdated(newValue);
    }

    function doubleValue() public {
        value = value * 2;
        emit ValueUpdated(value);
    }
}
