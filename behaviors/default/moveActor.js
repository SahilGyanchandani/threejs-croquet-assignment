import { ActorBehavior, PawnBehavior } from "../PrototypeBehavior"


class moveActor extends PawnBehavior {
    setup() {

        this.x = this.translation[0];
        this.y = this.translation[1];
        this.z = this.translation[2];

        let THREE = Microverse.THREE;
        var geometry = new THREE.BoxGeometry();

        var texture1 = new THREE.TextureLoader().load(this.actor);
        var material1 = new THREE.MeshBasicMaterial({ map: texture1, opacity: 1, transparent: false  });
        this.mesh1 = new THREE.Mesh(geometry, material1);

        var texture2 = new THREE.TextureLoader().load(this.getMyAvatar());
        var material2 = new THREE.MeshBasicMaterial({ map: texture2 ,opacity: 1, transparent: false});
        this.mesh2 = new THREE.Mesh(geometry, material2);
        this.collider();
    }

    collider() {
        this.mesh1.position.set(this.actor.translation[0], this.actor.translation[1], this.actor.translation[2]);
        this.mesh2.position.set(this.getMyAvatar().translation[0], this.getMyAvatar().translation[1], this.getMyAvatar().translation[2]);

        var box1 = new THREE.Box3().setFromObject(this.mesh1);
        var box2 = new THREE.Box3().setFromObject(this.mesh2);

        box1.min.y = box1.max.y = 0;
        box2.min.y = box2.max.y = 0;

        // Check for collision
        if (box1.intersectsBox(box2)) {
            this.callMethod();
        } else {
            console.log("No collision.");
        }

        this.future(200).collider();
    }

    callMethod() {
        this.jumpFootball(0);
    }

    jumpFootball(elapsedTime) {
        if (elapsedTime >= 700) return;
        if (elapsedTime < 350) {
            this.y += 0.11;
        }
        else if (elapsedTime >= 350 && elapsedTime <= 690) {
            this.y -= 0.11;
        }
        else {
            this.y = -1.2317309578093156;
        }

        this.z -= 0.2;

        this.set({ translation: [this.x, this.y, this.z] })
        this.future(10).jumpFootball(elapsedTime+10);
        console.log(elapsedTime);
    }

}
export default {
    modules: [
        {
            name: "CollisionThree",
            pawnBehaviors: [moveActor]
        }
    ]
}