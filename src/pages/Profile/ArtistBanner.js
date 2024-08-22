import React, { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "../../store";
import { Avatar } from "@windmill/react-ui";
import { FollowPersonIcon, FollowSmIcon } from "../../icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { APIContext } from "../../context/ApiContext";
import { useParams } from 'react-router-dom';
import { decodeFromBase64 } from "../../utils/format";
import alert from "../../utils/Alert";
import loading from "../../utils/Loading";
import { BASE_URL } from '../../config';

export default function ArtistBanner() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);
  const { getProfileInfoAPI, followArtistAPI } = useContext(APIContext);
  const [ profileInfo, setProfileInfo ]= useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  const getProfileInfo = async (userPrincipal) => {
    const profileInfo = await getProfileInfoAPI(userPrincipal);

    console.log("profileInfo", profileInfo)

    setProfileInfo(profileInfo);

    if(profileInfo.follower.includes(user.principal)) {
      setIsFollowing(true);
    }
  } 

  const followArtist = async (artist) => {
    loading();

    const result = await Promise.all([getProfileInfoAPI(artist), followArtistAPI(artist, !isFollowing)])

    console.log("result", result);

    setProfileInfo(result[0])  

    setIsFollowing(result[1].result);

    loading(false);

    alert("info", result[1].msg);
  }

  useEffect(() => {
    console.log("id", decodeFromBase64(id))

    getProfileInfo(decodeFromBase64(id));
  }, [id])

  return (
    <div className="font-plus flex flex-col text-white relative">
      <div
        className="flex flex-col justify-start"
        style={{ height: "300px", backgroundImage: 'url("/demo/assets/profile_banner.png")',
              backgroundRepeat: "no-repat",
              backgroundSize: "cover",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              opacity: "95%",
              backgroundBlendMode: "multiply"}}>
          <div className="flex flex-row hidden lg:block justify-start absolute top-6 left-9">
              <img src="/demo/assets/back.svg" className="cursor-pointer" onClick={() => history.goBack()}></img>
          </div>

          <div className="flex flex-col justify-start gap-4 items-center absolute top-16 left-9">
            <div className="flex flex-row justify-start gap-[33px] items-center">
              <Avatar
                  className="cursor-pointer w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[142px] lg:h-[142px]"
                  src={profileInfo?.avatar? `${BASE_URL}/` + profileInfo.avatar : "/demo/assets/avatar.png"}
                  alt=""
                  aria-hidden="true"
                />
              <div className="flex flex-col justify-start items-start gap-[10px]">
                <h1 className="font-plus-bold font-normal text-[24px] md:text-[40px] text-white leading-[40px]">{profileInfo?.displayname}</h1>
                <p className="font-plus text-11 text-white">{profileInfo?.username}</p>
                <a className="outline-btn text-[16px] gap-1 font-medium rounded-[16px] px-3 cursor-pointer z-50 flex row justify-center items-center group" 
                  style={{border: '2px solid white', textAlign: 'center'}} onClick={() => followArtist(profileInfo.userPrincipal)}>
                    <FollowSmIcon/>
                    <p className="font-bold">{isFollowing? "Unfollow" : "Follow"}</p></a>
              </div>
            </div>
            <div className="flex row w-full justify-start gap-4 items-start text-white z-50">
              <FollowPersonIcon/>
              <div className="text-11 font-plus text-white text-decoration-line cursor-pointer hover:text-darkblue-400 flex gap-2">
                <a className="font-bold">{profileInfo?.follower.length}</a>
                followers</div>
                <div className="text-11 font-plus text-white text-decoration-line cursor-pointer hover:text-darkblue-400 flex gap-2">
                <a className="font-bold">{profileInfo?.following.length}</a>
                following</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full" style={{ height:"157px", background: "linear-gradient(180deg, rgba(26, 26, 33, 0) 25.67%, #1A1A21 99.15%)"}}>
          </div>
      </div>
    </div>
  );
}
