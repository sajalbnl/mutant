import React from "react"
import "./body.css"
const Body=()=>{
    return(

    <div>

        <div className="body-div1">
            <div className="div1-text1">
                <p>Mutants Staked</p>
                <p>0/8888</p>
            </div>
            <div className="div1-text2">
                <p>Total Earned</p>
                <p>0$MUT</p>
            </div>
        </div>
        <div className="body-div1">
            <div className="div1-text1">
                <p>Total Hashrate</p>
                <p>0$MUT/block</p>
            </div>
            <div className="div1-text2" >
                <p>Total Reward Paidout</p>
                <p>0$MUT</p>
            </div>   
            <div className="text">
                <button className="button">
                    <div className="button-text">
                        <p>claim 0 $MUT</p>
                    </div>
            </button>
            </div>
        </div>
        <div className="body-div2">
            <button className="div2-text">
            Wallet
            </button>
            <button className="div2-text2">
            Staked
            </button>    
        </div>
        <div className="body-div3">

        </div>
    </div>
    )

}
export default Body;