import pygame
import random
import math
import sys

# ------------------ INIT ------------------
pygame.init()

WIDTH, HEIGHT = 800, 600
SCREEN = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("🚀 Space Invaders")

CLOCK = pygame.time.Clock()
FPS = 60

# ------------------ COLORS ------------------
WHITE = (255, 255, 255)
RED = (255, 60, 60)
GREEN = (60, 255, 60)
YELLOW = (255, 255, 0)
DARK = (10, 10, 30)

# ------------------ FONTS ------------------
FONT = pygame.font.SysFont("Arial", 28)
BIG_FONT = pygame.font.SysFont("Arial", 64)

# ------------------ PLAYER ------------------
PLAYER_W, PLAYER_H = 50, 40
player_x = WIDTH // 2 - PLAYER_W // 2
player_y = HEIGHT - 80
player_speed = 6

player_img = pygame.Surface((PLAYER_W, PLAYER_H))
player_img.fill(GREEN)

# ------------------ BULLET ------------------
bullet_w, bullet_h = 6, 16
bullet_x, bullet_y = 0, player_y
bullet_speed = 10
bullet_active = False

bullet_img = pygame.Surface((bullet_w, bullet_h))
bullet_img.fill(YELLOW)

# ------------------ ENEMIES ------------------
ENEMY_COUNT = 6
enemy_w, enemy_h = 40, 30

enemies = []
for _ in range(ENEMY_COUNT):
    enemies.append({
        "x": random.randint(0, WIDTH - enemy_w),
        "y": random.randint(60, 150),
        "dx": 3
    })

enemy_img = pygame.Surface((enemy_w, enemy_h))
enemy_img.fill(RED)

# ------------------ GAME DATA ------------------
score = 0
game_over = False

# ------------------ FUNCTIONS ------------------
def draw_text(text, font, color, x, y, center=False):
    surface = font.render(text, True, color)
    rect = surface.get_rect()
    if center:
        rect.center = (x, y)
    else:
        rect.topleft = (x, y)
    SCREEN.blit(surface, rect)

def collision(ex, ey, bx, by):
    return math.hypot(ex - bx, ey - by) < 30

# ------------------ MAIN LOOP ------------------
while True:
    CLOCK.tick(FPS)
    SCREEN.fill(DARK)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

        if event.type == pygame.KEYDOWN and not game_over:
            if event.key == pygame.K_SPACE and not bullet_active:
                bullet_active = True
                bullet_x = player_x + PLAYER_W // 2 - bullet_w // 2
                bullet_y = player_y

    keys = pygame.key.get_pressed()
    if not game_over:
        if keys[pygame.K_LEFT] and player_x > 0:
            player_x -= player_speed
        if keys[pygame.K_RIGHT] and player_x < WIDTH - PLAYER_W:
            player_x += player_speed

    # BULLET
    if bullet_active:
        bullet_y -= bullet_speed
        SCREEN.blit(bullet_img, (bullet_x, bullet_y))
        if bullet_y < 0:
            bullet_active = False

    # ENEMIES
    for enemy in enemies:
        if game_over:
            break

        enemy["x"] += enemy["dx"]
        if enemy["x"] <= 0 or enemy["x"] >= WIDTH - enemy_w:
            enemy["dx"] *= -1
            enemy["y"] += 40

        if enemy["y"] > player_y - 20:
            game_over = True

        if bullet_active and collision(enemy["x"], enemy["y"], bullet_x, bullet_y):
            bullet_active = False
            score += 1
            enemy["x"] = random.randint(0, WIDTH - enemy_w)
            enemy["y"] = random.randint(60, 150)

        SCREEN.blit(enemy_img, (enemy["x"], enemy["y"]))

    # PLAYER
    SCREEN.blit(player_img, (player_x, player_y))

    # UI
    draw_text(f"Score: {score}", FONT, WHITE, 10, 10)

    if game_over:
        draw_text("GAME OVER", BIG_FONT, RED, WIDTH // 2, HEIGHT // 2 - 20, True)
        draw_text("Press ESC to exit", FONT, WHITE, WIDTH // 2, HEIGHT // 2 + 40, True)
        if keys[pygame.K_ESCAPE]:
            pygame.quit()
            sys.exit()

    pygame.display.update()
