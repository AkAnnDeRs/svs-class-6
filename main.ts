controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setCurrentTilemap(tilemap`level12`)
    mySprite.vy = -150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(false)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a a a a . . . . . . . . 
    . . . . a a a a . . . . . . . . 
    . . . . a a a a . . . . . . . . 
    . . . . a a a a . . . . . . . . 
    . . . a a a a a a . . . . . . . 
    . . . a a a a a a . . . . . . . 
    . . . a a a a a a . . . . . . . 
    . . . a a a a a a . . . . . . . 
    . . . a a a a a a . . . . . . . 
    . . . . . a . a . . . . . . . . 
    . . . . . a . a . . . . . . . . 
    . . . . . a . a . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setVelocity(40, 0)
tiles.setCurrentTilemap(tilemap`level12`)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 700
