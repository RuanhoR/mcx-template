import {
  InvalidContainerSlotError,
  ItemStack,
  Player,
  world,
} from "@minecraft/server";

export function PlayerGetItem(player: Player, slot: number): ItemStack {
  try {
    return player
      .getComponent("minecraft:inventory")
      ?.container.getItem(slot) as ItemStack;
  } catch (e) {
    if (e instanceof InvalidContainerSlotError) {
      world.sendMessage(
        `§c[Error] Invalid slot ${slot} for player ${player.name}. Valid slots are 0-8 for hotbar and 9-35 for inventory.`,
      );
    } else {
      world.sendMessage(
        `§c[Error] Failed to get item from slot ${slot} for player ${player.name}: ${e}`,
      );
    }
    throw e;
  }
}
