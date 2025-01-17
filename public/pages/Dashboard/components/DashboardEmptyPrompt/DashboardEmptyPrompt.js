/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import PropTypes from 'prop-types';
import { EuiButton, EuiEmptyPrompt, EuiText } from '@elastic/eui';

import { APP_PATH } from '../../../../utils/constants';
import { PLUGIN_NAME } from '../../../../../utils/constants';

const createMonitorText =
  'There are no existing alerts. Create a monitor to add triggers and actions. Once an alarm is triggered, the state will show in this table.';
const createTriggerText =
  'There are no existing alerts. Create a trigger to start alerting. Once an alarm is triggered, the state will show in this table.';
const editTriggerConditionsText =
  'There are no existing alerts. Adjust trigger conditions to start alerting. Once an alarm is triggered, the state will show in this table.';

const createMonitorButton = (
  <EuiButton fill href={`${PLUGIN_NAME}#${APP_PATH.CREATE_MONITOR}`}>
    Create monitor
  </EuiButton>
);
const editMonitorButton = (onCreateTrigger) => (
  <EuiButton fill onClick={onCreateTrigger}>
    Edit monitor
  </EuiButton>
);

const DashboardEmptyPrompt = ({ onCreateTrigger, isModal = false }) => {
  const inMonitorDetails = typeof onCreateTrigger === 'function';
  const displayText = isModal
    ? editTriggerConditionsText
    : inMonitorDetails
    ? createTriggerText
    : createMonitorText;
  return (
    <EuiEmptyPrompt
      style={{ maxWidth: '45em' }}
      body={
        <EuiText>
          <p>{displayText}</p>
        </EuiText>
      }
      actions={
        inMonitorDetails || isModal ? editMonitorButton(onCreateTrigger) : createMonitorButton
      }
    />
  );
};

DashboardEmptyPrompt.propTypes = {
  onCreateTrigger: PropTypes.func,
};

export default DashboardEmptyPrompt;
