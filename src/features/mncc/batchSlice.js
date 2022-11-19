import { BATCH_INFO } from "../../app/shared/BATCH_INFO";

export const ListOfBatch = () => {
    return BATCH_INFO;
};

// export const RandomBatch = () => {
//     var randomVal = BATCH_INFO[Math.floor(BATCH_INFO.length * Math.random())]
//     console.log("random object", randomVal)
//     return randomVal;
// };

export const SelectById = (id) => {
    return BATCH_INFO.find((item) => item.id === id)
}