export function attack(event) {
    const { source, target, damage } = event;

    target.hp -= damage;
}
