// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract UYScoreRegistry {
    struct ScoreRecord {
        uint256 scoreValue;
        bytes32 scoreHash;
        uint256 timestamp;
        bool certified;
    }

    mapping(address => ScoreRecord) public scores;

    event ScoreCertified(
        address indexed user,
        uint256 scoreValue,
        bytes32 scoreHash,
        uint256 timestamp
    );

    function certifyScore(uint256 scoreValue, bytes32 scoreHash) external {
        scores[msg.sender] = ScoreRecord({
            scoreValue: scoreValue,
            scoreHash: scoreHash,
            timestamp: block.timestamp,
            certified: true
        });
        emit ScoreCertified(msg.sender, scoreValue, scoreHash, block.timestamp);
    }

    function getScore(address user) external view returns (ScoreRecord memory) {
        return scores[user];
    }
}
