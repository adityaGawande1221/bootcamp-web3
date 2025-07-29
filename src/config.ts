import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Plantix Token Swsp dApp",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr1pfgkt8fed4sg4lr6yu72vhtsdxle6pvhq8w6pm62208hqmh26lyqlt6j23",
            cw20: "andr1p0x9twyqza96wgey528w3j89v9a9kt6nkn4asa4qttzfkmr2lnxqt823vv",
            name: "Plantix Token Swsp dApp",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
