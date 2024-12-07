namespace SpriteKind {
    export const Ship = SpriteKind.create()
    export const EnemyProjectile = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.EnemyProjectile, SpriteKind.Player, function (sprite, otherSprite) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
// 1st way to write this
game.onUpdateInterval(1000, function () {
	
})
// 2nd way to write this
game.onUpdateInterval(1000, function () {
	
})
game.onUpdateInterval(1000, function () {
	
})
game.onUpdateInterval(500, function () {
	
})
