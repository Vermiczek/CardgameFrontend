import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUserContext } from "../components/ContextProvider";
import FamilyInfo from "../components/FamilyInfo";
import { StyledUserPanel } from "../styles/UserPanel.styled";
import { Family } from "../interfaces/family";
import { getCookie } from "../common/cookies";
import { InputField } from "../components/InputField";
import { selectUser } from "../redux/redux";
import { useDispatch, useSelector } from "react-redux";
import io from 'socket.io-client';

const socket = io("http://localhost:3000/", {autoConnect:false});

const FamiliesList = () => {
  const [familyMap, setFamilyMap] = useState<any>()

  useEffect(() => {
    var value = getCookie("token");
    fetch("http://localhost:3000/family/allData", {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + value,
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((response)=>{

      let map = response.map((move: any, id: any) => {
        return <div key={id}>XD</div>;
      });
     setFamilyMap(map);})
    }
  ,[])


  return (<div>{familyMap}</div>)
}

const userPanel = () => {
  const [familyData, setFamilyData] = useState<Family[]>();
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState<String>();
  const [screen, setScreen] = useState(0);
  const [expense, setExpense] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const FetchFamily = () => {
    if (document.cookie !== null) {
      var value = getCookie("token");
      fetch("http://localhost:3000/family/data", {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + value,
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: "same-origin",
      })
        .then((res) => res.json())
        .then((response) => {
          console.log("Family data: "+response)
          console.log(response);
          setFamilyData(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  
  const LeaveFamily = () => {
    if (document.cookie !== null) {
      let value = getCookie("token");
      fetch("http://localhost:3000/family/leave", {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + value,
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: "same-origin",
      
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    console.log("XDDDDD")
    console.log(familyData);
  }, [familyData]);

  useEffect(() => {
    if (user == null) {
      router.replace("/");
    }

    FetchFamily();
  }, [user]);

  useEffect(() => {
    socket.connect();
    socket.on('connect', () => {
      console.log("Connected")
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on("hello", (arg) => {
      console.log("NIGGERS")
      console.log(arg); // world
      
    });

    socket.emit('test','uwu');

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    console.log('testing');
    socket.emit('test','uwu');
  }

  if (familyData != null){
    if(familyData.length!==0)
    return (
      <StyledUserPanel>
        <InputField callbackFunction={setExpense} inputName={"Set expense"} />
        <button
          onClick={() => {
            sendPing();
          }}
        >
          Leave family
        </button>
      </StyledUserPanel>
    );
  else if (familyData.length===0) {
    return (
      <div>
        <button
          onClick={() => {
            router.replace('/JoinFamily')
          }}
        >
          Join a family
        </button>
        <button
          onClick={() => {
            router.replace('/createFamily');
          }}
        >
          Create a family
        </button>
        <FamiliesList />
      </div>
    );
  }}
};

export default userPanel;
