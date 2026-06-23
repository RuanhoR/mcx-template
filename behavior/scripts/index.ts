import App from './app.mcx'
import './component/ComponentTest.mcx'
import { createApp } from '@mbler/mcx'
import { system, world } from '@minecraft/server'
createApp(App).mount(world)
system.beforeEvents.startup.subscribe(event => {
  event.dimensionRegistry.registerCustomDimension('custom_dis:test')
})
