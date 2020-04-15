namespace SpriteKind {
    export const edge = SpriteKind.create()
    export const top = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const brick = SpriteKind.create()
    export const moreBalls = SpriteKind.create()
    export const timesTwo = SpriteKind.create()
    export const heart = SpriteKind.create()
    export const expand = SpriteKind.create()
    export const specialBrick = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.brick, function (sprite, otherSprite) {
    if (true) {
        info.changeScoreBy(15)
        otherSprite.destroy(effects.ashes, 200)
        sprite.setVelocity(sprite.vx, sprite.vy * -1)
        numBricks += -1
    }
})
function scoreChange () {
    if (projectileNum == 2) {
        info.changeScoreBy(30)
        info.startCountdown(10)
    } else {
        info.changeScoreBy(15)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(convertToText(numBricks))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.brick, function (sprite, otherSprite) {
    if (1 == kindBrick) {
        if (true) {
            sprite.setVelocity(sprite.vx, sprite.vy * -1)
            numBricks += -1
            scoreChange()
            otherSprite.destroy(effects.ashes, 200)
        }
    }
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.edge, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx * -1, sprite.vx)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.specialBrick, function (sprite, otherSprite) {
    if (1 == kindBrick) {
        scoreChange()
        otherSprite.destroy(effects.ashes, 200)
        sprite.setVelocity(sprite.vx, sprite.vy * -1)
        numBricks += -1
        whichProjectile()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    whichProjectile()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.edge, function (sprite, otherSprite) {
    if (1 == kindBrick) {
        sprite.setVelocity(sprite.vx * -1, sprite.vx)
    }
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.specialBrick, function (sprite, otherSprite) {
    info.changeScoreBy(15)
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, sprite.vy * -1)
    numBricks += -1
    if (1 == kindBrick) {
        projectile = sprites.createProjectileFromSprite(img`
. c c . 
c c c c 
c c c c 
. c c . 
`, otherSprite, 0, 50)
        projectileNum = 1
        sprite.setVelocity(sprite.vx, sprite.vy * -1)
    }
})
function buildBricks () {
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            createBrick(index * 16 + 32, column * 8 + 24)
            column += 1
        }
        column = 0
    }
}
info.onCountdownEnd(function () {
    if (projectileNum == 2) {
        info.changeScoreBy(15)
    } else {
        paddle.setImage(img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity((sprite.x - otherSprite.x) * 5, sprite.vy * -1)
    if (sprite.vy >= -150) {
        sprite.vy += -8
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.top, function (sprite, otherSprite) {
    if (1 <= kindBrick) {
        sprite.setVelocity(sprite.vx, sprite.vy * -1)
    }
})
function whichProjectile () {
    if (projectileNum == 1) {
        projectile.setVelocity((projectile.x - paddle.x) * 5, projectile.vy * -1)
        if (projectile.vy >= -150) {
            projectile.vy += -8
        }
        projectileNum = 0
    }
    if (projectileNum == 2) {
    	
    }
    if (projectileNum == 3) {
        info.changeLifeBy(1)
        projectileNum3 = 0
    }
    if (projectileNum == 4) {
        paddle.setImage(img`
f f e e e e e e e e e e e e e e e e f f 
f f e e e e e e e e e e e e e e e e f f 
f f e e e e e e e e e e e e e e e e f f 
f f e e e e e e e e e e e e e e e e f f 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`)
        info.startCountdown(10)
    }
}
function createBrick (x: number, y: number) {
    randNum = Math.randomRange(0, 4)
    specialBlock = Math.randomRange(0, 2)
    verySpecial = Math.randomRange(0, 1)
    if (0 == randNum) {
        if (0 == specialBlock) {
            brickvar = sprites.create(img`
f f f f f f f f f f f f f f f f 
f a c c c c c c c c c c c c a f 
f c a a a a a 1 1 a a a a a c f 
f c a a a a 1 1 1 1 a a a a c f 
f c a a a a 1 1 1 1 a a a a c f 
f c a a a a a 1 1 a a a a a c f 
f a c c c c c c c c c c c c a f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.specialBrick)
            kindBrick = 1
        } else {
            brickvar = sprites.create(img`
f f f f f f f f f f f f f f f f 
f a c c c c c c c c c c c c a f 
f c a a a a a a a a a a a a c f 
f c a a a a a a a a a a a a c f 
f c a a a a a a a a a a a a c f 
f c a a a a a a a a a a a a c f 
f a c c c c c c c c c c c c a f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
        }
    } else if (1 == randNum) {
        if (1 == specialBlock) {
            brickvar = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 6 8 8 8 8 8 8 8 8 8 8 8 8 6 f 
f 8 6 6 6 6 6 6 1 1 6 6 6 6 8 f 
f 8 6 6 1 6 1 6 6 6 1 6 6 6 8 f 
f 8 6 6 6 1 6 6 6 1 6 6 6 6 8 f 
f 8 6 6 1 6 1 6 1 6 6 6 6 6 8 f 
f 6 8 8 8 8 8 8 8 1 1 8 8 8 6 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.specialBrick)
            kindBrick2 = 2
        } else {
            brickvar = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 6 8 8 8 8 8 8 8 8 8 8 8 8 6 f 
f 8 6 6 6 6 6 6 6 6 6 6 6 6 8 f 
f 8 6 6 6 6 6 6 6 6 6 6 6 6 8 f 
f 8 6 6 6 6 6 6 6 6 6 6 6 6 8 f 
f 8 6 6 6 6 6 6 6 6 6 6 6 6 8 f 
f 6 8 8 8 8 8 8 8 8 8 8 8 8 6 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
        }
    } else if (2 == randNum) {
        if (0 == specialBlock) {
            if (1 == verySpecial) {
                brickvar = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 e e e e e e e e e e e e 2 f 
f e 2 2 2 1 1 2 1 1 2 2 2 2 e f 
f e 2 2 2 1 1 1 1 1 2 2 2 2 e f 
f e 2 2 2 2 1 1 1 2 2 2 2 2 e f 
f e 2 2 2 2 2 1 2 2 2 2 2 2 e f 
f 2 e e e e e e e e e e e e 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.specialBrick)
                kindBrick3 = 3
            } else {
                brickvar = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 e e e e e e e e e e e e 2 f 
f e 2 2 2 2 2 2 2 2 2 2 2 2 e f 
f e 2 2 2 2 2 2 2 2 2 2 2 2 e f 
f e 2 2 2 2 2 2 2 2 2 2 2 2 e f 
f e 2 2 2 2 2 2 2 2 2 2 2 2 e f 
f 2 e e e e e e e e e e e e 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
            }
        } else {
            brickvar = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 e e e e e e e e e e e e 2 f 
f e 2 2 2 2 2 2 2 2 2 2 2 2 e f 
f e 2 2 2 2 2 2 2 2 2 2 2 2 e f 
f e 2 2 2 2 2 2 2 2 2 2 2 2 e f 
f e 2 2 2 2 2 2 2 2 2 2 2 2 e f 
f 2 e e e e e e e e e e e e 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
        }
    } else if (3 == randNum) {
        if (2 == specialBlock) {
            brickvar = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 4 e e e e e e e e e e e e 4 f 
f e 4 4 4 d 4 4 4 4 4 d 4 4 e f 
f e 4 4 d 4 4 4 4 4 4 4 d 4 e f 
f e 4 d d d d d d d d d d d e f 
f e 4 4 d 4 4 4 4 4 4 4 d 4 e f 
f 4 e e e d e e e e e d e e 4 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.specialBrick)
            kindBrick4 = 4
        } else {
            brickvar = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 4 e e e e e e e e e e e e 4 f 
f e 4 4 4 4 4 4 4 4 4 4 4 4 e f 
f e 4 4 4 4 4 4 4 4 4 4 4 4 e f 
f e 4 4 4 4 4 4 4 4 4 4 4 4 e f 
f e 4 4 4 4 4 4 4 4 4 4 4 4 e f 
f 4 e e e e e e e e e e e e 4 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
        }
    } else {
        brickvar = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 7 6 6 6 6 6 6 6 6 6 6 6 6 7 f 
f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
f 6 7 7 7 7 7 7 7 7 7 7 7 7 6 f 
f 7 6 6 6 6 6 6 6 6 6 6 6 6 7 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    }
    brickvar.setPosition(x, y)
    numBricks += 1
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (kindBrick3 == 0) {
    	
    }
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.top, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, sprite.vy * -1)
})
let startball = 0
let brickvar: Sprite = null
let verySpecial = 0
let randNum = 0
let projectileNum3 = 0
let projectile: Sprite = null
let projectileNum = 0
let kindBrick3 = 0
let kindBrick4 = 0
let kindBrick2 = 0
let kindBrick = 0
let numBricks = 0
let column = 0
let specialBlock = 0
let paddle: Sprite = null
scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e d d d e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e d d d e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e d d d e e e e e e e e e e e e e e e e e e 2 2 2 e e e e e e e e 2 2 2 e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e 6 6 6 e e e e e e e e e e e 2 2 2 e e e e e e e e 2 2 2 e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e 6 6 6 e e e e e e e e e e e 2 2 2 e e e e e e e e 2 2 2 e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e 6 6 6 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e d d d e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e d d d e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e d d d e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 e e e e e f f f 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e e f f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e f f 8 8 8 f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 
f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e e f f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e f f 8 8 8 f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e f f 8 8 8 f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f f f f 8 8 8 8 8 e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e 8 8 8 e e 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f f 8 8 8 8 8 8 e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e 8 8 8 e e 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e 8 8 8 8 8 8 8 8 e e e e e e e e e e e e 8 8 8 8 8 8 8 e e e e e e e e e e e 8 8 8 e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e 8 8 8 e 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e 8 8 8 8 8 8 8 8 8 f e e e e e e e e e e e e 8 8 8 8 8 e e e e e e e e e e e e e 8 8 8 e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e 8 8 8 e 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e 8 8 8 e e e e e e e e e e e e e e 8 8 8 e e e e e e e 8 8 8 8 e e e f f f e e e e e e e e e e e 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e 8 8 8 e e e e e e e e e e e e e e 8 8 8 e e e e e e e 8 8 8 8 e e e f f f e e e e e e e e e e 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 e e e e e e 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e 8 8 8 e e e e e e e e e e e e e e 8 8 8 e e e e e e 8 8 8 8 e e e e f f f e e e e e e e e e e 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e e e e e f f 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 e e e e e e e e e e e e e e 8 8 8 e e e e e e 8 8 8 8 e e e e f f f e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e e e e e f f f e e 8 8 8 8 8 8 8 e e e e 8 8 8 e e e e e e e e e e e e e e 8 8 8 e e e e e e 8 8 8 e e e e e f f f e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e e e e e f f f e e e e 8 8 8 8 8 e e e e 8 8 8 e e e e e e e e e e e e e e 8 8 8 e e e e e e 8 8 8 e e e e e f f f e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e e e e e f f f e e e e e e 8 8 8 e e e e 8 8 8 e e e e e e e e e e e e e e 8 8 8 e e e e e e 8 8 8 8 e e e e f f f e e e e e e e e e e 8 8 8 8 8 e e e e 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e e e e e f f f e e e e e e 8 8 8 e e e e 8 8 8 e e e e e e e e e e e e e e 8 8 8 e e e e e e 8 8 8 8 e e e e f f 8 8 8 e e e e e e e 8 8 8 8 8 8 e e e e e 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e e e e e f f f e e e e e 8 8 8 8 e e e e 8 8 8 e e e e e e e e e e e e e e 8 8 8 e e e e e e e 8 8 8 8 e e e f 8 8 8 8 e e e e e e e 8 8 8 8 8 e e e e e e 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e 8 8 8 8 8 8 f e e e e e 8 8 8 8 e e e 8 8 8 8 e e e e e e e e e e e e e e 8 8 8 e e e e e e e 8 8 8 8 8 e 8 8 8 8 8 8 e e e e e e e 8 8 8 8 e e e e e e e 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e 8 8 8 8 8 8 8 8 8 8 8 8 e e 8 8 8 8 e e e 8 8 8 8 8 e e e e e e e e e e e e e e 8 8 8 e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e 8 8 8 8 e e e e e e e 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e 8 8 8 8 e e e e e e e e e e e e e e e 8 8 8 e e e e e e e e e 8 8 8 8 8 8 8 8 e e e e e e e e e 8 8 8 e e e e e e e e 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 e e 8 8 8 8 8 8 8 8 8 8 e 8 8 8 8 8 8 e e e e e e e e e e e e e e e e 8 8 8 e e e e e e e e e e 8 8 8 8 8 f f e e e e e e e e 8 8 8 8 e e e e e e e e 8 8 8 8 8 8 e e 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e 8 8 8 e e e e e e e e e e e e e e f f f e e e e e e e e 8 8 8 8 e e e e e e e 2 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e 2 2 2 e e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e 8 8 8 8 e e e e e e e 2 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e 2 2 2 e e e e e e e e e e e 2 2 2 8 8 8 8 8 8 8 8 8 8 8 f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e 2 2 2 e e 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e 2 2 2 e e e e e e e e e e e 2 2 2 e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e d d d e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 2 2 2 e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e d d d e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e d d d e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 e e e e e e e e e e e e e e e e e e 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e d d d e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 e e e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e d d d e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e 8 8 8 e e e e 8 8 8 8 e e e e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 e 8 8 8 8 f f f e e e e e e e e e e e e e e 8 8 8 e e e e 8 8 8 8 e e e 8 8 8 8 8 e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e e 8 8 8 8 8 8 e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 f f e e e e e 8 8 8 8 8 8 e e e 8 8 8 e e e 8 8 8 8 e e 8 8 8 8 8 8 8 8 8 e e e e 8 8 8 8 8 e f f f e 8 8 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f e e e e e 8 8 8 8 8 8 8 e e 8 8 8 e e 8 8 8 8 8 e e 8 8 8 8 8 8 8 8 8 e e e e 8 8 8 8 e e f f f e e e 8 8 8 e e e e e e e e e e e e e e e e e e e e e e e e e e d d d e e e e e 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 8 8 8 8 8 6 e 8 8 8 8 8 8 8 8 f f e e e e 8 8 8 8 8 8 8 8 8 e 8 8 8 e 8 8 8 8 8 e e 8 8 8 8 8 e 8 8 8 8 e e e e 8 8 8 8 e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e d d d e e e e e 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 f e 8 8 8 8 e e e e e 8 8 8 8 6 6 e e e 8 8 8 8 8 8 f f e e e e 8 8 8 8 8 8 8 8 8 e 8 8 8 e 8 8 8 8 e e e 8 8 8 8 e e 8 8 8 8 e e e e 8 8 8 8 e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e d d d e e e e e 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 f f f f e e 8 8 8 8 e e e e 8 8 8 6 6 6 e e e 8 8 8 8 8 f f f e e e e 8 8 8 8 8 8 8 8 8 e 8 8 8 8 8 8 8 e e e 8 8 8 8 e e 8 8 8 8 e e e e e 8 8 8 e e e f f f e e e e e e e e e e e 6 6 6 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 e e f f f e e 8 8 8 8 e e e e 8 8 8 e e e e e e 8 8 8 8 e f f f e e e e 8 8 8 8 8 8 8 8 8 e 8 8 8 8 8 8 8 8 e e 8 8 8 8 e 8 8 8 8 8 e e e e e 8 8 8 e e e f f f e e e e e e e e e e e 6 6 6 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 e e 8 8 8 8 8 8 e 8 8 8 e e e e 8 8 8 e e e e e e 8 8 8 8 e f f f e e e e 8 8 8 e 8 8 8 8 8 e 8 8 8 8 8 8 8 8 e e 8 8 8 e e 8 8 8 8 e e e e e e 8 8 8 e e e f f f e e e e e e e e e e e 6 6 6 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e 8 8 8 8 e e e e e e 8 8 8 8 e f f f e e e e 8 8 8 e 8 8 8 8 8 e 8 8 8 8 8 8 8 8 8 e 8 8 8 8 e 8 8 8 8 e e e e e e 8 8 8 e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e 8 8 8 e e f f f e 8 8 8 8 8 8 e e 8 8 8 8 e 8 8 8 8 8 8 8 8 8 e 8 8 8 8 8 e e e e e e e e e e 8 8 8 e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 8 f f 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e 8 8 8 8 8 f f 8 8 8 8 8 8 8 8 8 e 8 8 8 8 8 8 8 8 8 e e 8 8 8 e e 8 8 8 8 8 8 e 8 8 8 8 8 8 e 8 8 8 e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e 8 8 8 8 e e 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e e e f f f e e e e e e e 8 8 8 e e e e e 8 8 8 e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 e e e e d d d e e e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 8 8 8 8 8 f f 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f 8 8 8 f f f f f 8 8 8 f f f f f f 8 8 8 f f f f f e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 8 8 8 8 8 8 e e e e e e d d d e e e e e e e e e e e 8 8 8 8 8 8 f f f f f 8 8 8 8 8 f 8 8 8 8 8 8 f f f 8 8 8 8 f f f f 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f 8 8 8 f f f f f f 8 8 8 f f f f f e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f 8 8 8 8 f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e 2 2 2 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e 2 2 2 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e 2 2 2 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e d d d e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e d d d e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e d d d e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e 2 2 2 e e e e e e e e e 2 2 2 e e e e e e e e 6 6 6 e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e 2 2 2 e e e e e e e e e 2 2 2 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e 2 2 2 e e e e e e e e e 2 2 2 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 e e e e e e e e e e e e e e d d d e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 e e e e e e e e e e e e e e d d d e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 e e e e e e e e e e e e e e d d d e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e 
`)
game.showLongText("use the arrow keys to move the paddle and destroy the bricks", DialogLayout.Bottom)
pause(100)
scene.setBackgroundImage(img`
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
`)
paddle = sprites.create(img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
paddle.setPosition(80, 110)
controller.moveSprite(paddle, 100, 0)
paddle.setFlag(SpriteFlag.StayInScreen, true)
specialBlock = 0
let top2 = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.top)
top2.setPosition(80, 0)
let right = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.edge)
right.setPosition(159, 60)
let left = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.edge)
left.setPosition(0, 60)
let ball2 = sprites.create(img`
. 1 1 . 
1 1 1 1 
1 1 1 1 
. 1 1 . 
`, SpriteKind.ball)
column = 0
numBricks = 0
kindBrick = 0
kindBrick2 = 0
kindBrick4 = 0
kindBrick3 = 0
info.setScore(0)
info.setLife(3)
buildBricks()
game.onUpdate(function () {
    if (startball == 0) {
        ball2.setPosition(paddle.x, 100)
        ball2.setVelocity(0, 0)
        if (controller.A.isPressed()) {
            startball = 1
        }
    }
    if (startball == 1) {
        ball2.setVelocity(Math.randomRange(-30, 30), -50)
        startball = 2
    }
    if (ball2.y > 115) {
        startball = 0
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (numBricks <= 0) {
        numBricks = 0
        startball = 0
        info.changeScoreBy(100)
        effects.confetti.startScreenEffect()
        pause(2000)
        effects.confetti.endScreenEffect()
        buildBricks()
    }
})
