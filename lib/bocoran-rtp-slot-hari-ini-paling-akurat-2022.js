'use babel';

import BocoranRtpSlotHariIniPalingAkurat2022View from './bocoran-rtp-slot-hari-ini-paling-akurat-2022-view';
import { CompositeDisposable } from 'atom';

export default {

  bocoranRtpSlotHariIniPalingAkurat2022View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.bocoranRtpSlotHariIniPalingAkurat2022View = new BocoranRtpSlotHariIniPalingAkurat2022View(state.bocoranRtpSlotHariIniPalingAkurat2022ViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.bocoranRtpSlotHariIniPalingAkurat2022View.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'bocoran-rtp-slot-hari-ini-paling-akurat-2022:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.bocoranRtpSlotHariIniPalingAkurat2022View.destroy();
  },

  serialize() {
    return {
      bocoranRtpSlotHariIniPalingAkurat2022ViewState: this.bocoranRtpSlotHariIniPalingAkurat2022View.serialize()
    };
  },

  toggle() {
    console.log('BocoranRtpSlotHariIniPalingAkurat2022 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
