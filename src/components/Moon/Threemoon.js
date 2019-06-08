import './style.css'
import sunTextureSource from '../../assets/images/textures/Moon.jpg'
import sunNormalSource from '../../assets/images/textures/MoonDisplacement.jpg'

import * as THREE from 'three'

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
// const starsTexture = textureLoader.load(starsTextureSource)
const sunTexture = textureLoader.load(sunTextureSource)
const sunMap = textureLoader.load(sunNormalSource)

// starsTexture.wrapS = THREE.RepeatWrapping
// starsTexture.wrapT = THREE.RepeatWrapping
// starsTexture.repeat.x = 15
// starsTexture.repeat.y = 15

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) =>
{
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})

/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height)
camera.position.z = 1.18
camera.position.y = 1.049
camera.position.x = -0.61
camera.rotation.z = 0
camera.rotation.y = 2.95
camera.rotation.x = 0.1
scene.add(camera)

// /**
//  * cabin
//  */
const cabin = new THREE.Object3D()
scene.add(cabin)



const sun = new THREE.Mesh(
    new THREE.SphereBufferGeometry(1, 45, 45),
    new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, map: sunTexture, metalness: 0.3, roughness: 0.8 })
)
sun.position.z = 3
sun.position.x = -1
sun.receiveShadow = true
sun.castShadow = true
scene.add(sun)


// const stars = new THREE.Mesh(
//     new THREE.SphereGeometry(25,100,100),
//     new THREE.MeshStandardMaterial({ metalness: 0.3, roughness: 0.8, side: THREE.DoubleSide, map: starsTexture })
// )
// stars.receiveShadow = false
// stars.rotation.x = - Math.PI
// stars.position.x = 0
// stars.position.y = 0.3
// stars.position.z = -1.2
// cabin.add(stars)



/**
 * Lights
 */

const ambientLight = new THREE.AmbientLight(0xffffff, 0.05)
ambientLight.castShadow = true
scene.add(ambientLight)


const sunLight = new THREE.DirectionalLight( 0xffffff, 1.2)
sunLight.position.x = -1.094
sunLight.position.y = 2.942
sunLight.position.z = 4.752
sunLight.rotation.x = -0.722
sunLight.rotation.y = 0.921
sunLight.rotation.z = 0
sunLight.castshadow = true
sunLight.shadow.camera.top = 1.2
sunLight.shadow.camera.bottom = -1.2
sunLight.shadow.camera.right = 1.2
sunLight.shadow.camera.left = 1.2
scene.add(sunLight)



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(sizes.width, sizes.height)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

/**
 * Loop
 */

const loop = () =>
{
    window.requestAnimationFrame(loop)
    sun.rotation.x += 0.0005

    if(movez == 1)
    {
        // if(camera.position.z < 0.85 && camera.position.z > -1.08 && camera.position.x < 0.278 && camera.position.x > -0.278)
        // {
              camera.position.x  -= (Math.sin(camera.rotation.y)/100)
              camera.position.z -= (Math.cos(camera.rotation.y)/100)
              camera.position.y += (Math.tan(camera.rotation.x)/350)
        // }
        // else
        // {
        //     if (camera.position.z > 0.85)
        //     {
        //         camera.position.z = 0.8499999
        //     }
        //     if (camera.position.z < -1.08)
        //     {
        //         camera.position.z = -1.0799991
        //     }
        //     if (camera.position.x >= 0.278)
        //     {
        //         camera.position.x = 0.2779999
        //     }
        //     if (camera.position.x < -0.278)
        //     {
        //         camera.position.x = -0.27799999999999
        //     }
        // }
    } 
    if(moveq == 1)
    {
        // if(camera.position.z < 0.85 && camera.position.z > -1.08 && camera.position.x < 0.278 && camera.position.x > -0.278)
        // {
              camera.position.x += (Math.sin(-camera.rotation.y - Math.PI/2)/100)
              camera.position.z += (-Math.cos(-camera.rotation.y - Math.PI/2)/100)
        //     }
        // else
        // {
        //     if (camera.position.z > 0.85)
        //     {
        //         camera.position.z = 0.8499999
        //     }
        //     if (camera.position.z < -1.08)
        //     {
        //         camera.position.z = -1.0799991
        //     }
        //     if (camera.position.x >= 0.278)
        //     {
        //         camera.position.x = 0.2779999
        //     }
        //     if (camera.position.x < -0.278)
        //     {
        //         camera.position.x = -0.27799999999999
        //     }
        // }
    } 
    if(moves == 1)
    {
        // if(camera.position.z < 0.85 && camera.position.z > -1.08 && camera.position.x < 0.278 && camera.position.x > -0.278)
        // {
            camera.position.x  += (Math.sin(camera.rotation.y)/100)
            camera.position.z += (Math.cos(camera.rotation.y)/100)
        camera.position.y -= (Math.tan(camera.rotation.x)/350)
        // }
        //  else
        //  {
        //      if (camera.position.z > 0.85)
        //      {
        //          camera.position.z = 0.8499999
        //      }
        //      if (camera.position.z < -1.08)
        //      {
        //          camera.position.z = -1.0799991
        //      }
        //      if (camera.position.x >= 0.278)
        //      {
        //          camera.position.x = 0.2779999
        //      }
        //      if (camera.position.x < -0.278)
        //      {
        //          camera.position.x = -0.27799999999999
        //      }
        //  }
    } 
    if(moved == 1)
    {
        // if(camera.position.z < 0.85 && camera.position.z > -1.08 && camera.position.x < 0.278 && camera.position.x > -0.278)
        // {
            camera.position.x += (Math.sin(-camera.rotation.y + Math.PI/2)/100)
            camera.position.z += (-Math.cos(-camera.rotation.y + Math.PI/2)/100)
        // }
        // else
        // {
        //     if (camera.position.z > 0.85)
        //     {
        //         camera.position.z = 0.8499999
        //     }
        //     if (camera.position.z < -1.08)
        //     {
        //         camera.position.z = -1.0799991
        //     }
        //     if (camera.position.x >= 0.278)
        //     {
        //         camera.position.x = 0.2779999
        //     }
        //     if (camera.position.x < -0.278)
        //     {
        //         camera.position.x = -0.27799999999999
        //     }
        // }
    } 
    // Renderer
    renderer.render(scene, camera)
}
loop()

// // Hot
// if(module.hot)
// {
//     module.hot.accept()

//     module.hot.dispose(() =>
//     {
//         console.log('dispose')
//     })
// }

let movez = 0

    window.addEventListener('keydown', (event) =>
    {
        if(event.key == 'z')
        {
            movez = 1
            window.addEventListener('keyup', (event) => {
                if(event.key == 'z')
                {
                    movez = 0
                }
            })

        } 
    })
    let moveq = 0

    window.addEventListener('keydown', (event) =>
    {
        if(event.key == 'q')
        {
            moveq = 1
            window.addEventListener('keyup', (event) => {
                if(event.key == 'q')
                {
                    moveq = 0
                }
            })

        } 
    })
    let moves = 0

    window.addEventListener('keydown', (event) =>
    {
        if(event.key == 's')
        {
            moves = 1
            window.addEventListener('keyup', (event) => {
                if(event.key == 's')
                {
                    moves = 0
                }
            })

        } 
    })
    let moved = 0

    window.addEventListener('keydown', (event) =>
    {
        if(event.key == 'd')
        {
            moved = 1
            window.addEventListener('keyup', (event) => {
                if(event.key == 'd')
                {
                    moved = 0
                }
            })

        } 
    })