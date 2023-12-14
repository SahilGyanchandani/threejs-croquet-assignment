import { PawnBehavior } from "../PrototypeBehavior";

class MovePawn extends PawnBehavior {
    //     setup() {
    //         this.speed = 0.2;
    //         this.addEventListener("pointerDown", "moveFootball")
    //     }
    //     moveFootball() {
    //         let x = this.translation[0]
    //         let y = this.translation[1]
    //         let z = this.translation[2] - 1;
    //         console.log(this.translation);
    //         this.speed -= 0.1;
    //         this.set({ rotation: Microverse.q_euler(this.speed,0 , 0) });
    //         this.set({ translation: [x, y, z] })
    //         this.future(20).moveFootball();
    //         // this.set({ rotation: [0, 0, 1] })
    //     }
    // }


    setup() {
        this.angle = 0;
        this.spinSpeed = 0.02;

        console.log(this.getMyAvatar().translation);
        console.log(this.translation);
        this.x = this.translation[0];
        this.y = this.translation[1];
        this.z = this.translation[2];

        this.collider();

        // this.addEventListener("pointerDown", "moveBall");
    }
    collider() {
        if (Math.abs(this.getMyAvatar().translation[2] - this.translation[2] <= 0.9)) {
            this.moveBall();
        }
        this.future(100).collider();

        console.log(this.translation[2]);
        console.log(this.getMyAvatar().translation[2]);
    }

    moveBall() {
        this.rotateBall(0);
    }

    rotateBall(elapsedTime) {
        // this.y += 3;
        // console.log(this.y);
        // console.log(this.y);
        if (elapsedTime >= 600) return;
        if (elapsedTime < 300) {
            this.y += 0.11;
            console.log(this.y);
        }
        else if (elapsedTime >= 300 && elapsedTime <= 590) {
            this.y -= 0.11
            console.log(this.y);
        }
        else {
            this.y = -1.2317309578093156;
        }
        // else if (elapsedTime >= 350 && elapsedTime <475) {
        //     this.y -= 0.3;
        // }
        // else if (elapsedTime >=475 && elapsedTime <600)
        // {
        //     this.y -=0.2;
        //     console.log(this.y);
        // }
        // else if(elapsedTime >=600 && elapsedTime <700)
        // {
        //     this.y -=0.1;
        //     console.log(this.y);
        // }
        //  else {
        //     this.y = -1.146047395181116;
        // }
        this.future(10).rotateBall(elapsedTime + 10);
        this.angle -= this.spinSpeed;
        this.z -= 0.2;

        this.speed = 0.05;

        this.set({
            rotation: Microverse.q_euler(this.angle, 0, 0),
            translation: [this.x, this.y, this.z],
        });
        // console.log(this.translation);
    }
}

export default {
    modules: [
        {
            name: "MoveFootball",
            pawnBehaviors: [MovePawn]
        }
    ]
}