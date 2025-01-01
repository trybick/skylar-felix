import { ISourceOptions } from '@tsparticles/engine';

/** Templates from:
 * https://github.com/tsparticles/tsparticles/tree/main/utils/configs/src
 *
 * There are four templates that seemed decent listed below.
 * Only two are in use now though.
 */
export const particleOptionsTemplates: Record<string, ISourceOptions> = {
  // -------------- Pop --------------
  pop: {
    particles: {
      destroy: {
        mode: 'split',
        split: {
          count: 1,
          factor: {
            value: {
              min: 2,
              max: 4,
            },
          },
          rate: {
            value: 100,
          },
          particles: {
            life: {
              count: 1,
              duration: {
                value: {
                  min: 2,
                  max: 3,
                },
              },
            },
            move: {
              speed: {
                min: 10,
                max: 15,
              },
            },
          },
        },
      },
      number: {
        value: 80,
      },
      color: {
        value: [
          '#3998D0',
          '#2EB6AF',
          '#A9BD33',
          '#FEC73B',
          '#F89930',
          '#F45623',
          '#D62E32',
          '#EB586E',
          '#9952CF',
        ],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 1,
      },
      size: {
        value: {
          min: 10,
          max: 15,
        },
      },
      collisions: {
        enable: true,
        mode: 'bounce',
      },
      move: {
        enable: true,
        speed: 1,
        outModes: 'bounce',
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'pop',
        },
      },
    },
    background: {
      color: '#000000',
    },
  },
  // -------------- Absorber --------------
  absorber: {
    key: 'absorbers',
    name: 'Absorbers',
    particles: {
      number: {
        value: 300,
      },
      collisions: {
        enable: true,
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: {
          min: 0.1,
          max: 1,
        },
      },
      size: {
        value: {
          min: 1,
          max: 2,
        },
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'top',
        straight: true,
        warp: true,
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        push: {
          quantity: 10,
        },
      },
    },
    absorbers: {
      draggable: true,
      size: {
        value: {
          min: 5,
          max: 10,
        },
        limit: 10,
      },
      position: {
        x: 50,
        y: 50,
      },
    },
    background: {
      color: '#0d47a1',
    },
  },
  // -------------- Snow --------------
  snow: {
    key: 'snow',
    name: 'Snow',
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
        },
      },
      color: {
        value: '#fff',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 1,
      },
      size: {
        value: 10,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'bottom',
        straight: true,
      },
      wobble: {
        enable: true,
        distance: 10,
        speed: 10,
      },
      zIndex: {
        value: {
          min: 0,
          max: 100,
        },
        opacityRate: 10,
        sizeRate: 10,
        velocityRate: 10,
      },
    },
    background: {
      color: '#333333',
    },
  },
  // -------------- Nasa --------------
  nasa: {
    key: 'nasa',
    name: 'NASA',
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: {
          min: 0.1,
          max: 1,
        },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      size: {
        value: {
          min: 1,
          max: 3,
        },
      },
      move: {
        enable: true,
        speed: {
          min: 0.1,
          max: 1,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'bubble',
        },
        onClick: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
      },
    },
    background: {
      color: '#232741',
    },
  },
};
