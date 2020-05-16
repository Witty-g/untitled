namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onHitWall(SpriteKind.Player, function (sprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    EvilPoison.destroy(effects.spray, 100)
    info.changeScoreBy(1)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite) {
    EvilPoison.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Antidote = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f 9 9 9 f 9 9 9 9 f . . 
. . . . 9 9 9 9 9 9 9 9 9 9 2 2 
. . . . 9 9 9 9 9 9 9 9 9 9 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpaceCadet, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
})
scene.onHitWall(SpriteKind.Food, function (sprite) {
    AnimalsHeart.destroy()
})
let Frog_ray: Sprite = null
let AnimalsHeart: Sprite = null
let Antidote: Sprite = null
let EvilPoison: Sprite = null
let SpaceCadet: Sprite = null
SpaceCadet = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 4 4 8 8 8 . . 5 5 5 5 . . . . 
. 4 4 8 8 8 . 5 5 5 5 5 5 . . . 
4 4 4 8 8 8 . 5 5 5 5 5 5 5 . . 
4 4 4 4 2 2 2 2 2 2 2 2 2 2 . . 
4 4 4 4 2 2 2 2 2 2 2 2 2 2 . . 
4 4 4 4 2 2 2 2 2 2 2 2 2 2 . . 
4 4 4 4 2 2 2 2 2 2 2 2 2 2 . . 
4 4 4 8 8 8 . . . . . . . . . . 
. 4 4 8 8 8 . . . . . . . . . . 
. 4 4 8 8 8 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(
            hex`1e000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030303000000000000000000000000000000000000000000000000000001010003030303010101010101010100000000000000010101010101010101000000000202000000000000000101010100000001010000000000000000000000000202000000000000000000000101010101000000000000000000000000000202000000000000000000000000000000000000000000000000010103030303000000000000000000000000000000000000000000000000010000000000010101010101010000000000000000000000000000000001010000000000000000000000010000000001010101010101010101010101000000000000000000000000010101010101000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . 
. . . . . . . 2 2 . . . . . 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 2 . . . . . 
. . . . . . 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.darkGroundNorth],
            TileScale.Sixteen
        ))
SpaceCadet.setPosition(120, 110)
controller.moveSprite(SpaceCadet, 100, 100)
scene.cameraFollowSprite(SpaceCadet)
info.setLife(5)
game.onUpdateInterval(100, function () {
    EvilPoison = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . 7 7 2 7 7 7 7 2 7 7 7 . . 
. . . . 7 7 7 7 7 7 7 7 7 7 . . 
. . . . 7 7 7 7 2 7 7 7 7 7 . . 
. . . . 7 7 7 2 2 2 7 7 7 7 . . 
. . . . 7 7 7 7 7 2 2 2 7 . . . 
. . . . . 7 7 7 7 7 7 7 . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    EvilPoison.setVelocity(-100, 70)
    EvilPoison.setPosition(200, 100)
})
game.onUpdateInterval(500, function () {
    Frog_ray = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 7 7 . . . . . 
. . . . . . . . 7 7 7 7 . . . . 
. . . . 5 5 5 5 7 2 2 7 . . . . 
. . . 5 5 . . . 7 2 2 7 7 . . . 
. . . . . . . 2 7 7 2 7 7 . . . 
. . . . . . 2 2 . 5 5 7 . . . . 
. . . . 2 2 2 . 5 5 . . . . . . 
. . . . . . . . 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    Frog_ray.setVelocity(-25, 500)
    Frog_ray.setPosition(400, 30)
})
game.onUpdateInterval(5000, function () {
    AnimalsHeart = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . 2 2 2 . 2 8 2 2 . . . 
. . . . 2 8 8 2 . 2 8 8 2 . . . 
. . . 2 2 8 8 8 2 8 8 8 2 . . . 
. . . 2 8 8 5 8 2 8 8 8 2 . . . 
. . . 2 2 8 8 8 8 8 8 8 2 . . . 
. . . . 2 8 8 8 8 8 8 8 2 . . . 
. . . . 2 8 5 8 8 8 5 8 2 . . . 
. . . . . 2 8 8 8 8 8 2 2 . . . 
. . . . . 2 8 8 8 8 8 2 . . . . 
. . . . . . 2 8 8 8 2 2 . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    AnimalsHeart.setVelocity(-100, 50)
    AnimalsHeart.setPosition(100, 100)
})
