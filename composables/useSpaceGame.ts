interface Coordinate {
  x: number;
  y: number;
}

interface GameState {
  renderCount: number;
  character: Coordinate;
  enemies: Coordinate[];
  projectiles: Coordinate[];
  enemyProjectiles: Coordinate[];
}

export const useSpaceGame = ({ boardSize }: { boardSize: number }) => {
  const gameState = ref<"idle" | "playing" | "gameover">("idle");

  const intitialState: GameState = {
    renderCount: 0,
    character: { x: boardSize / 2, y: boardSize - 2 },
    enemies: [
      { x: 8, y: 1 },
      { x: 14, y: 1 },
    ],
    projectiles: [],
    enemyProjectiles: [],
  };

  const state = shallowRef<GameState>(intitialState);

  const { resume, pause } = useRafFn((time) => {
    moveProjectiles();

    if (state.value.renderCount % 20 === 0) {
      spawnEnemy();

      if (state.value.enemies.length) {
        state.value.enemies.forEach((enemy) => {
          if (Math.random() > 0.3) return;

          enemyFire(enemy);
        });
      }
    }

    state.value.renderCount++;
    triggerRef(state);
  });

  const startGame = () => {
    gameState.value = "playing";
    resume();
  };

  const resetGame = () => {
    gameState.value = "idle";
    state.value = intitialState;
  };

  const moveProjectiles = () => {
    if (state.value.projectiles.length) {
      state.value.projectiles = state.value.projectiles.filter((projectile) => {
        projectile.y--;

        if (projectileHitsEnemy(projectile)) {
          killEnemy(projectile);
          return false;
        }

        return projectile.y >= 0;
      });
    }
    if (state.value.enemyProjectiles.length) {
      state.value.enemyProjectiles = state.value.enemyProjectiles.filter(
        (projectile) => {
          projectile.y++;

          if (
            (projectile.x === state.value.character.x &&
              projectile.y === state.value.character.y) ||
            (projectile.x - 1 === state.value.character.x &&
              projectile.y === state.value.character.y + 1) ||
            (projectile.x + 1 === state.value.character.x &&
              projectile.y === state.value.character.y + 1)
          ) {
            gameOver();
          }

          return projectile.y <= boardSize;
        }
      );
    }
  };

  const gameOver = () => {
    gameState.value = "gameover";

    pause();
  };

  const spawnEnemy = () => {
    if (state.value.enemies.length >= 10) return;

    // find a random x position that is not occupied by an enemy
    let x = Math.floor(Math.random() * boardSize);

    while (
      state.value.enemies.some((enemy) => enemy.x <= x - 3 && enemy.x >= x + 3)
    ) {
      x = Math.floor(Math.random() * boardSize);
    }

    state.value.enemies.push({
      x,
      y: 1 + Math.floor(Math.random() * 5),
    });
  };

  onKeyStroke("ArrowDown", (e) => {
    e.preventDefault();

    move("down");
  });

  onKeyStroke("ArrowUp", (e) => {
    e.preventDefault();
    move("up");
  });

  onKeyStroke("ArrowLeft", (e) => {
    e.preventDefault();
    move("left");
  });

  onKeyStroke("ArrowRight", (e) => {
    e.preventDefault();
    move("right");
  });

  const move = (direction: "left" | "right" | "up" | "down") => {
    if (gameState.value !== "playing") return;

    if (direction === "left") {
      if (state.value.character.x <= 0 + 1) return;
      state.value.character.x--;
    }

    if (direction === "right") {
      if (state.value.character.x >= boardSize - 2) return;
      state.value.character.x++;
    }

    if (direction === "up") {
      if (state.value.character.y <= 0) return;
      state.value.character.y--;
    }

    if (direction === "down") {
      if (state.value.character.y >= boardSize - 2) return;
      state.value.character.y++;
    }
  };

  onKeyStroke(
    " ",
    (e) => {
      e.preventDefault();
      startGame();
      fire();
    },
    { dedupe: false }
  );

  const fire = () => {
    state.value.projectiles.push({
      x: state.value.character.x,
      y: state.value.character.y - 1,
    });
  };

  const enemyFire = (enemy: { x: number; y: number }) => {
    state.value.enemyProjectiles.push({
      x: enemy.x,
      y: enemy.y + 1,
    });
  };

  const projectileHitsEnemy = (projectile: {
    x: number;
    y: number;
  }): boolean => {
    return state.value.enemies.some(
      (enemy) =>
        (enemy.x === projectile.x && enemy.y === projectile.y) ||
        (enemy.x - 1 === projectile.x && enemy.y - 1 === projectile.y) ||
        (enemy.x + 1 === projectile.x && enemy.y - 1 === projectile.y)
    );
  };

  const killEnemy = (projectile: { x: number; y: number }) => {
    state.value.enemies = state.value.enemies.filter(
      (enemy) =>
        !(
          (enemy.x === projectile.x && enemy.y === projectile.y) ||
          (enemy.x - 1 === projectile.x && enemy.y - 1 === projectile.y) ||
          (enemy.x + 1 === projectile.x && enemy.y - 1 === projectile.y)
        )
    );
  };

  return {
    gameState,
    state,
    boardSize,
    startGame,
    moveProjectiles,
    gameOver,
    spawnEnemy,
    move,
    fire,
    enemyFire,
    projectileHitsEnemy,
    killEnemy,
    resetGame,
  };
};
