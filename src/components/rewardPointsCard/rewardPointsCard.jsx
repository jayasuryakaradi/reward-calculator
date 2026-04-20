import PropTypes from 'prop-types';
import { REWARDS_CARD_LABELS } from '../../constants';

import './rewardPointsCard.css';

const RewardPointsCard = ({ totalPoints }) => {
  return (
    <div className="rewards-summary">
      <div className="rewards-card">
        <p className="rewards-label">{REWARDS_CARD_LABELS.TOTAL_REWARDS_POINTS}</p>
        <p className="rewards-value">{totalPoints}</p>
      </div>
    </div>
  );
};

RewardPointsCard.propTypes = {
  totalPoints: PropTypes.number.isRequired,
};

export default RewardPointsCard;
