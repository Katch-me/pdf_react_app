import React from 'react';
import TrimAudio from './TrimAudio';
import ChangeAudioVolume from './ChangeAudioVolume';
import ChangeAudioSpeed from './ChangeAudioSpeed';
import ChangeAudioPitch from './ChangeAudioPitch';
import Equalizer from './Equalizer';
import ReverseAudio from './ReverseAudio';
import VoiceRecorder from './VoiceRecorder';
import AudioJoiner from './AudioJoiner';

const AudioTools = ({ selectedComponent }) => {
  return (
    <>
      {selectedComponent === 'trimAudio' && <TrimAudio />}
      {selectedComponent === 'changeAudioVolume' && <ChangeAudioVolume />}
      {selectedComponent === 'changeAudioSpeed' && <ChangeAudioSpeed />}
      {selectedComponent === 'changeAudioPitch' && <ChangeAudioPitch />}
      {selectedComponent === 'equalizer' && <Equalizer />}
      {selectedComponent === 'reverseAudio' && <ReverseAudio />}
      {selectedComponent === 'voiceRecorder' && <VoiceRecorder />}
      {selectedComponent === 'audioJoiner' && <AudioJoiner />}
    </>
  );
};

export default AudioTools;
