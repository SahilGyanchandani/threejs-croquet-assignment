// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js", "move.js"
    ];

    Constants.DefaultCards = [
        {
            card: {
                name: "world model",
                layers: ["walk"],
                type: "3d",
                singleSided: true,
                shadow: true,
                translation: [0, -1.7, 0],
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0xe0e0e0,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                fileName: "/abandoned_parking_4k.jpg",
                dataType: "jpg",
                toneMappingExposure: 1.2
            }
        },
        {
            card: {
                translation: [6.609990192842255, -1.146047395181116, -9.093990249238825],
                scale: [0.20823504258396383, 0.20823504258396383, 0.20823504258396383],
                rotation: [0, 0.6945823403158495, 0, -0.7194132140302663],
                layers: ["pointer"],
                name: "football (1).glb",
                dataLocation: "3T3Er72zeWOUWYfsB-4Gpu4WXC2bNEKC6aMNQ4tJu7acPCAgJCdue3syPTgxJ3ohJ3o3JjslITEgej07eyF7LgEgIwQbLhIhGwdlHz0zGQ49YWdtLBIQE2xkZns9O3o3JjslITEgejk9NyY7IjEmJzF6ODs3NTgwMSIwMTI1ITggey43PSUYJ2VtYx9mMC4aZGIyODEcCzkNAWY2ZCEeOBodOQAFOT1iPzY4BGR7MDUgNXsSMxMNZDkNGjYZBgInGA0tBRgeLBk8E2Q7GxYDMwZ5IjosYSIGOQ4ZODU_",
                behaviorModules: ["MoveFootball"],
                dataScale: [2.132073633812013, 2.132073633812013, 2.132073633812013],
                fileName: "football (1).glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        }
    ];
}
