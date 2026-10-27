class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
          const l=speed.length
        let carArrayWithPandS=new Array()
        for(let i=0;i<l;i++){
            carArrayWithPandS.push([position[i],speed[i]])
        }
        carArrayWithPandS=carArrayWithPandS.sort((a,b)=>b[0]-a[0])

        //need to calculate the time required by each of the car to react at target
         carArrayWithPandS= carArrayWithPandS.map((car)=>{
            return (target-car[0])/car[1]
        })
        let fleet=0
        let maxTimeReq=0
        for(const speed of carArrayWithPandS){
            if(speed>maxTimeReq){
                fleet++
                maxTimeReq=speed
            }

        }
       
        return fleet
       
    }
}
