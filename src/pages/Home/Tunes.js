import React, { useEffect, useRef, useState, memo, Suspense } from "react";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { dispatch, useDispatch, useSelector } from "../../store";
import { AvatarInput } from "../../components/DragDrop/AvatarInput";
import loading from "../../utils/Loading";
import { idlFactory } from '../../smart-contracts/backend.js';
import { HttpAgent, Actor } from '@dfinity/agent';
import alert from "../../utils/Alert.js";
import { UpdateInfo, SetTitle, SetOrgTunes, SetCurrentTune } from '../../store/reducers/auth.js';
import ABCJS from "abcjs";
import 'abcjs/abcjs-audio.css';

function Tunes() {
    const history = useHistory();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => (state.auth));
    const [orgTunes, setOrgTunes] = useState([]);
    const [currentTuneData, setCurrentTuneData] = useState("");

    const synth = new ABCJS.synth.CreateSynth();
    const synthControl = new ABCJS.synth.SynthController();

    useEffect(() => {
        dispatch(SetTitle('Browse Tunes'));

        getOrgTunes();
    }, [])

    const getOrgTunes = async () => {
        const agent = new HttpAgent({ host: 'https://ic0.app' });
        const actor = Actor.createActor(idlFactory, { agent,  canisterId: process.env.REACT_APP_CANISTER_ID });

        let res = await actor.get_original_tune_list(0);

        let tunes = res.map((tune) => {return {name: tune.split('.abc')[0]}});
        dispatch(SetOrgTunes(tunes));
        setOrgTunes(tunes);

        console.log(tunes);

        synthControl.load("#player", null, {
            displayRestart: true,
            displayPlay: true,
            displayProgress: true,
            displayWarp: true
        });

    }

    useEffect(() => {
        iniABCJS(currentTuneData);
    }, [currentTuneData])

    const iniABCJS = async (currentTuneData) => {
        const visualObj = ABCJS.renderAbc("tunedata", currentTuneData,  { responsive: "resize" });

        await synth.init({ visualObj: visualObj[0] });
        await synthControl.setTune(visualObj[0], false, {});
    }

    const onSelectTune = async (selectedTune) => {
        if(!selectedTune) return;
        console.log("selectTune", selectedTune)

        const agent = new HttpAgent({ host: 'https://ic0.app' });
        const actor = Actor.createActor(idlFactory, { agent,  canisterId: process.env.REACT_APP_CANISTER_ID });

        const tuneData = await actor.get_original_tune(`${selectedTune.name}.abc`);
        setCurrentTuneData(tuneData);

        dispatch(SetCurrentTune({ origin: true, title: selectedTune.name, data: tuneData}));
        const visualObj = ABCJS.renderAbc("tunedata", tuneData,  { responsive: "resize" });
    }

    return (
    <>
      <div className="flex flex-row py-8 font-plus px-10 relative w-full gap-8 text-darkblue-800 h-full">
        <div className="w-full h-full flex flex-row py-8 px-16">                 
            <div className="w-full h-full flex flex-col gap-4 px-8 overflow-y-auto">
                {orgTunes.map((tune, index) => (
                    <div className="flex rounded-4 bg-white px-4 py-4 flex-row w-full justify-start items-center gap-4 cursor-pointer" key={index} onClick={() => {onSelectTune(tune)}}>  
                        <img className="rounded-8 w-12 h-12" src="/demo/assets/camera.png"
                            style={{
                                border: '3px solid #faca15' // Adjust the font size as needed
                        }}/>              
                        <p className="font-plus-bold font-bold text-16">{tune.name}</p>
                    </div>
                ))}
            </div>

            <div className="w-full h-full bg-white rounded-4 flex flex-col gap-4 p-8">
                <div class="flex w-full items-center px-3 gap-3">
                    <div id="player" class="flex-grow"></div>
                    <a className="fill-btn-secondary text-11 px-4 py-1 text-white font-medium bg-green-450 rounded-2 cursor-pointer flex flex-row justify-center gap-45 items-center"
                        style={{textAlign: 'center'}} onClick={() => {history.push("/app/playground")}}>
                        <p className='text-white font-medium'>Edit</p>
                    </a>
                </div>
                <div className="flex w-full flex-col y-scrollable-tag overflow-y-auto">
                    <div id="tunedata" className="text-gray-800 flex-grow"></div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Tunes;
