import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from 'Components/Card';
import Label from 'Components/Label';
import ConfirmModal from 'Components/Modal/ConfirmModal';
import TagList from 'Components/TagList';
import { kinds } from 'Helpers/Props';
import formatShortTimeSpan from 'Utilities/Date/formatShortTimeSpan';
import translate from 'Utilities/String/translate';
import EditImportListModalConnector from './EditImportListModalConnector';
import styles from './ImportList.css';

class ImportList extends Component {

  //
  // Lifecycle

  constructor(props, context) {
    super(props, context);

    this.state = {
      isEditImportListModalOpen: false,
      isDeleteImportListModalOpen: false
    };
  }

  //
  // Listeners

  onEditImportListPress = () => {
    this.setState({ isEditImportListModalOpen: true });
  };

  onEditImportListModalClose = () => {
    this.setState({ isEditImportListModalOpen: false });
  };

  onDeleteImportListPress = () => {
    this.setState({
      isEditImportListModalOpen: false,
      isDeleteImportListModalOpen: true
    });
  };

  onDeleteImportListModalClose = () => {
    this.setState({ isDeleteImportListModalOpen: false });
  };

  onConfirmDeleteImportList = () => {
    this.props.onConfirmDeleteImportList(this.props.id);
  };

  //
  // Render

  render() {
    const {
      id,
      name,
      enabled,
      enableAuto,
      tags,
      tagList,
      minRefreshInterval
    } = this.props;

    return (
      <Card
        className={styles.list}
        overlayContent={true}
        onPress={this.onEditImportListPress}
      >
        <div className={styles.name}>
          {name}
        </div>

        <div className={styles.enabled}>
          {
            enabled ?
              <Label kind={kinds.SUCCESS}>
                {translate('Enabled')}
              </Label> :
              <Label
                kind={kinds.DISABLED}
                outline={true}
              >
                {translate('Disabled')}
              </Label>
          }

          {
            enableAuto ?
              <Label kind={kinds.SUCCESS}>
                {translate('AutomaticAdd')}
              </Label> :
              null
          }
        </div>

        <TagList
          tags={tags}
          tagList={tagList}
        />

        <div className={styles.enabled}>
          <Label kind={kinds.DEFAULT} title='List Refresh Interval'>
            {`${translate('Refresh')}: ${formatShortTimeSpan(minRefreshInterval)}`}
          </Label>
        </div>

        <EditImportListModalConnector
          id={id}
          isOpen={this.state.isEditImportListModalOpen}
          onModalClose={this.onEditImportListModalClose}
          onDeleteImportListPress={this.onDeleteImportListPress}
        />

        <ConfirmModal
          isOpen={this.state.isDeleteImportListModalOpen}
          kind={kinds.DANGER}
          title={translate('DeleteImportList')}
          message={translate('DeleteImportListMessageText', { name })}
          confirmLabel={translate('Delete')}
          onConfirm={this.onConfirmDeleteImportList}
          onCancel={this.onDeleteImportListModalClose}
        />
      </Card>
    );
  }
}

ImportList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  enableAuto: PropTypes.bool.isRequired,
  tags: PropTypes.arrayOf(PropTypes.number).isRequired,
  tagList: PropTypes.arrayOf(PropTypes.object).isRequired,
  minRefreshInterval: PropTypes.string.isRequired,
  onConfirmDeleteImportList: PropTypes.func.isRequired
};

export default ImportList;
