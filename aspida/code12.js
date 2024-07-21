gdjs.Historia2Code = {};
gdjs.Historia2Code.GDInterfaz_95VidaVaciaObjects1= [];
gdjs.Historia2Code.GDInterfaz_95VidaVaciaObjects2= [];
gdjs.Historia2Code.GDInterfaz_95VidaObjects1= [];
gdjs.Historia2Code.GDInterfaz_95VidaObjects2= [];
gdjs.Historia2Code.GDInterfaz_95ScoreObjects1= [];
gdjs.Historia2Code.GDInterfaz_95ScoreObjects2= [];
gdjs.Historia2Code.GDInterfaz_95PocionObjects1= [];
gdjs.Historia2Code.GDInterfaz_95PocionObjects2= [];
gdjs.Historia2Code.GDInterfaz_95MunicionObjects1= [];
gdjs.Historia2Code.GDInterfaz_95MunicionObjects2= [];
gdjs.Historia2Code.GDMunicionObjects1= [];
gdjs.Historia2Code.GDMunicionObjects2= [];
gdjs.Historia2Code.GDPocionesObjects1= [];
gdjs.Historia2Code.GDPocionesObjects2= [];
gdjs.Historia2Code.GDScoreObjects1= [];
gdjs.Historia2Code.GDScoreObjects2= [];
gdjs.Historia2Code.GDBarraUIObjects1= [];
gdjs.Historia2Code.GDBarraUIObjects2= [];
gdjs.Historia2Code.GDSolo1VidaObjects1= [];
gdjs.Historia2Code.GDSolo1VidaObjects2= [];
gdjs.Historia2Code.GDFondoCastillo0Objects1= [];
gdjs.Historia2Code.GDFondoCastillo0Objects2= [];
gdjs.Historia2Code.GDFondoCastillo1Objects1= [];
gdjs.Historia2Code.GDFondoCastillo1Objects2= [];
gdjs.Historia2Code.GDFondoBosque1Objects1= [];
gdjs.Historia2Code.GDFondoBosque1Objects2= [];
gdjs.Historia2Code.GDFondoCastillo2Objects1= [];
gdjs.Historia2Code.GDFondoCastillo2Objects2= [];
gdjs.Historia2Code.GDFondoBosque2Objects1= [];
gdjs.Historia2Code.GDFondoBosque2Objects2= [];
gdjs.Historia2Code.GDFondoCastillo3Objects1= [];
gdjs.Historia2Code.GDFondoCastillo3Objects2= [];
gdjs.Historia2Code.GDFondoBosque3Objects1= [];
gdjs.Historia2Code.GDFondoBosque3Objects2= [];
gdjs.Historia2Code.GDFondoCastillo4Objects1= [];
gdjs.Historia2Code.GDFondoCastillo4Objects2= [];
gdjs.Historia2Code.GDFondoBosque4Objects1= [];
gdjs.Historia2Code.GDFondoBosque4Objects2= [];
gdjs.Historia2Code.GDBordeCastillo2Objects1= [];
gdjs.Historia2Code.GDBordeCastillo2Objects2= [];
gdjs.Historia2Code.GDBordeCastillo1Objects1= [];
gdjs.Historia2Code.GDBordeCastillo1Objects2= [];
gdjs.Historia2Code.GDSueloCastilloObjects1= [];
gdjs.Historia2Code.GDSueloCastilloObjects2= [];
gdjs.Historia2Code.GDSueloBosqueObjects1= [];
gdjs.Historia2Code.GDSueloBosqueObjects2= [];
gdjs.Historia2Code.GDEnemyShootObjects1= [];
gdjs.Historia2Code.GDEnemyShootObjects2= [];
gdjs.Historia2Code.GDEnemyWalkObjects1= [];
gdjs.Historia2Code.GDEnemyWalkObjects2= [];
gdjs.Historia2Code.GDEnemyFlyObjects1= [];
gdjs.Historia2Code.GDEnemyFlyObjects2= [];
gdjs.Historia2Code.GDEnemyBalaObjects1= [];
gdjs.Historia2Code.GDEnemyBalaObjects2= [];
gdjs.Historia2Code.GDGoRightObjects1= [];
gdjs.Historia2Code.GDGoRightObjects2= [];
gdjs.Historia2Code.GDGoLeftObjects1= [];
gdjs.Historia2Code.GDGoLeftObjects2= [];
gdjs.Historia2Code.GDBackgroundObjectsObjects1= [];
gdjs.Historia2Code.GDBackgroundObjectsObjects2= [];
gdjs.Historia2Code.GDPantallaMueresObjects1= [];
gdjs.Historia2Code.GDPantallaMueresObjects2= [];
gdjs.Historia2Code.GDPlayerObjects1= [];
gdjs.Historia2Code.GDPlayerObjects2= [];
gdjs.Historia2Code.GDProtaBalaObjects1= [];
gdjs.Historia2Code.GDProtaBalaObjects2= [];
gdjs.Historia2Code.GDMeleeObjects1= [];
gdjs.Historia2Code.GDMeleeObjects2= [];
gdjs.Historia2Code.GDMeleeBossObjects1= [];
gdjs.Historia2Code.GDMeleeBossObjects2= [];
gdjs.Historia2Code.GDNPCObjects1= [];
gdjs.Historia2Code.GDNPCObjects2= [];
gdjs.Historia2Code.GDTimerObjects1= [];
gdjs.Historia2Code.GDTimerObjects2= [];
gdjs.Historia2Code.GDNPC_95TextObjects1= [];
gdjs.Historia2Code.GDNPC_95TextObjects2= [];
gdjs.Historia2Code.GDPulsaCObjects1= [];
gdjs.Historia2Code.GDPulsaCObjects2= [];
gdjs.Historia2Code.GDNPC_95Text22Objects1= [];
gdjs.Historia2Code.GDNPC_95Text22Objects2= [];
gdjs.Historia2Code.GDNPC_95Text3Objects1= [];
gdjs.Historia2Code.GDNPC_95Text3Objects2= [];
gdjs.Historia2Code.GDNPC_95Text32Objects1= [];
gdjs.Historia2Code.GDNPC_95Text32Objects2= [];
gdjs.Historia2Code.GDMuroObjects1= [];
gdjs.Historia2Code.GDMuroObjects2= [];
gdjs.Historia2Code.GDAumentanPocionesObjects1= [];
gdjs.Historia2Code.GDAumentanPocionesObjects2= [];
gdjs.Historia2Code.GDBordesCastilloObjects1= [];
gdjs.Historia2Code.GDBordesCastilloObjects2= [];
gdjs.Historia2Code.GDFondoCastilloObjects1= [];
gdjs.Historia2Code.GDFondoCastilloObjects2= [];
gdjs.Historia2Code.GDNPC2Objects1= [];
gdjs.Historia2Code.GDNPC2Objects2= [];

gdjs.Historia2Code.conditionTrue_0 = {val:false};
gdjs.Historia2Code.condition0IsTrue_0 = {val:false};
gdjs.Historia2Code.condition1IsTrue_0 = {val:false};


gdjs.Historia2Code.mapOfGDgdjs_46Historia2Code_46GDPantallaMueresObjects1Objects = Hashtable.newFrom({"PantallaMueres": gdjs.Historia2Code.GDPantallaMueresObjects1});
gdjs.Historia2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Historia2Code.condition0IsTrue_0.val = false;
{
gdjs.Historia2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Historia2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Historia2Code.GDPlayerObjects1);
gdjs.Historia2Code.GDPantallaMueresObjects1.length = 0;

{for(var i = 0, len = gdjs.Historia2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setGravity(0);
}
}{for(var i = 0, len = gdjs.Historia2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxFallingSpeed(0, false);
}
}{for(var i = 0, len = gdjs.Historia2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCurrentFallSpeed(0);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Historia2Code.mapOfGDgdjs_46Historia2Code_46GDPantallaMueresObjects1Objects, -(1920), -(1080), "");
}{for(var i = 0, len = gdjs.Historia2Code.GDPantallaMueresObjects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDPantallaMueresObjects1[i].setOpacity(25);
}
}{for(var i = 0, len = gdjs.Historia2Code.GDPantallaMueresObjects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDPantallaMueresObjects1[i].setWidth(2 * gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.Historia2Code.GDPantallaMueresObjects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDPantallaMueresObjects1[i].setHeight(2 * gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.Historia2Code.GDPantallaMueresObjects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDPantallaMueresObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.Historia2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Historia2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDPlayerObjects1[i].flipX(true);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Sonidos\\Historia1.wav", 1, true, 80, 1);
}}

}


{


gdjs.Historia2Code.condition0IsTrue_0.val = false;
{
gdjs.Historia2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if (gdjs.Historia2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel9", true);
}}

}


};

gdjs.Historia2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Historia2Code.GDInterfaz_95VidaVaciaObjects1.length = 0;
gdjs.Historia2Code.GDInterfaz_95VidaVaciaObjects2.length = 0;
gdjs.Historia2Code.GDInterfaz_95VidaObjects1.length = 0;
gdjs.Historia2Code.GDInterfaz_95VidaObjects2.length = 0;
gdjs.Historia2Code.GDInterfaz_95ScoreObjects1.length = 0;
gdjs.Historia2Code.GDInterfaz_95ScoreObjects2.length = 0;
gdjs.Historia2Code.GDInterfaz_95PocionObjects1.length = 0;
gdjs.Historia2Code.GDInterfaz_95PocionObjects2.length = 0;
gdjs.Historia2Code.GDInterfaz_95MunicionObjects1.length = 0;
gdjs.Historia2Code.GDInterfaz_95MunicionObjects2.length = 0;
gdjs.Historia2Code.GDMunicionObjects1.length = 0;
gdjs.Historia2Code.GDMunicionObjects2.length = 0;
gdjs.Historia2Code.GDPocionesObjects1.length = 0;
gdjs.Historia2Code.GDPocionesObjects2.length = 0;
gdjs.Historia2Code.GDScoreObjects1.length = 0;
gdjs.Historia2Code.GDScoreObjects2.length = 0;
gdjs.Historia2Code.GDBarraUIObjects1.length = 0;
gdjs.Historia2Code.GDBarraUIObjects2.length = 0;
gdjs.Historia2Code.GDSolo1VidaObjects1.length = 0;
gdjs.Historia2Code.GDSolo1VidaObjects2.length = 0;
gdjs.Historia2Code.GDFondoCastillo0Objects1.length = 0;
gdjs.Historia2Code.GDFondoCastillo0Objects2.length = 0;
gdjs.Historia2Code.GDFondoCastillo1Objects1.length = 0;
gdjs.Historia2Code.GDFondoCastillo1Objects2.length = 0;
gdjs.Historia2Code.GDFondoBosque1Objects1.length = 0;
gdjs.Historia2Code.GDFondoBosque1Objects2.length = 0;
gdjs.Historia2Code.GDFondoCastillo2Objects1.length = 0;
gdjs.Historia2Code.GDFondoCastillo2Objects2.length = 0;
gdjs.Historia2Code.GDFondoBosque2Objects1.length = 0;
gdjs.Historia2Code.GDFondoBosque2Objects2.length = 0;
gdjs.Historia2Code.GDFondoCastillo3Objects1.length = 0;
gdjs.Historia2Code.GDFondoCastillo3Objects2.length = 0;
gdjs.Historia2Code.GDFondoBosque3Objects1.length = 0;
gdjs.Historia2Code.GDFondoBosque3Objects2.length = 0;
gdjs.Historia2Code.GDFondoCastillo4Objects1.length = 0;
gdjs.Historia2Code.GDFondoCastillo4Objects2.length = 0;
gdjs.Historia2Code.GDFondoBosque4Objects1.length = 0;
gdjs.Historia2Code.GDFondoBosque4Objects2.length = 0;
gdjs.Historia2Code.GDBordeCastillo2Objects1.length = 0;
gdjs.Historia2Code.GDBordeCastillo2Objects2.length = 0;
gdjs.Historia2Code.GDBordeCastillo1Objects1.length = 0;
gdjs.Historia2Code.GDBordeCastillo1Objects2.length = 0;
gdjs.Historia2Code.GDSueloCastilloObjects1.length = 0;
gdjs.Historia2Code.GDSueloCastilloObjects2.length = 0;
gdjs.Historia2Code.GDSueloBosqueObjects1.length = 0;
gdjs.Historia2Code.GDSueloBosqueObjects2.length = 0;
gdjs.Historia2Code.GDEnemyShootObjects1.length = 0;
gdjs.Historia2Code.GDEnemyShootObjects2.length = 0;
gdjs.Historia2Code.GDEnemyWalkObjects1.length = 0;
gdjs.Historia2Code.GDEnemyWalkObjects2.length = 0;
gdjs.Historia2Code.GDEnemyFlyObjects1.length = 0;
gdjs.Historia2Code.GDEnemyFlyObjects2.length = 0;
gdjs.Historia2Code.GDEnemyBalaObjects1.length = 0;
gdjs.Historia2Code.GDEnemyBalaObjects2.length = 0;
gdjs.Historia2Code.GDGoRightObjects1.length = 0;
gdjs.Historia2Code.GDGoRightObjects2.length = 0;
gdjs.Historia2Code.GDGoLeftObjects1.length = 0;
gdjs.Historia2Code.GDGoLeftObjects2.length = 0;
gdjs.Historia2Code.GDBackgroundObjectsObjects1.length = 0;
gdjs.Historia2Code.GDBackgroundObjectsObjects2.length = 0;
gdjs.Historia2Code.GDPantallaMueresObjects1.length = 0;
gdjs.Historia2Code.GDPantallaMueresObjects2.length = 0;
gdjs.Historia2Code.GDPlayerObjects1.length = 0;
gdjs.Historia2Code.GDPlayerObjects2.length = 0;
gdjs.Historia2Code.GDProtaBalaObjects1.length = 0;
gdjs.Historia2Code.GDProtaBalaObjects2.length = 0;
gdjs.Historia2Code.GDMeleeObjects1.length = 0;
gdjs.Historia2Code.GDMeleeObjects2.length = 0;
gdjs.Historia2Code.GDMeleeBossObjects1.length = 0;
gdjs.Historia2Code.GDMeleeBossObjects2.length = 0;
gdjs.Historia2Code.GDNPCObjects1.length = 0;
gdjs.Historia2Code.GDNPCObjects2.length = 0;
gdjs.Historia2Code.GDTimerObjects1.length = 0;
gdjs.Historia2Code.GDTimerObjects2.length = 0;
gdjs.Historia2Code.GDNPC_95TextObjects1.length = 0;
gdjs.Historia2Code.GDNPC_95TextObjects2.length = 0;
gdjs.Historia2Code.GDPulsaCObjects1.length = 0;
gdjs.Historia2Code.GDPulsaCObjects2.length = 0;
gdjs.Historia2Code.GDNPC_95Text22Objects1.length = 0;
gdjs.Historia2Code.GDNPC_95Text22Objects2.length = 0;
gdjs.Historia2Code.GDNPC_95Text3Objects1.length = 0;
gdjs.Historia2Code.GDNPC_95Text3Objects2.length = 0;
gdjs.Historia2Code.GDNPC_95Text32Objects1.length = 0;
gdjs.Historia2Code.GDNPC_95Text32Objects2.length = 0;
gdjs.Historia2Code.GDMuroObjects1.length = 0;
gdjs.Historia2Code.GDMuroObjects2.length = 0;
gdjs.Historia2Code.GDAumentanPocionesObjects1.length = 0;
gdjs.Historia2Code.GDAumentanPocionesObjects2.length = 0;
gdjs.Historia2Code.GDBordesCastilloObjects1.length = 0;
gdjs.Historia2Code.GDBordesCastilloObjects2.length = 0;
gdjs.Historia2Code.GDFondoCastilloObjects1.length = 0;
gdjs.Historia2Code.GDFondoCastilloObjects2.length = 0;
gdjs.Historia2Code.GDNPC2Objects1.length = 0;
gdjs.Historia2Code.GDNPC2Objects2.length = 0;

gdjs.Historia2Code.eventsList0(runtimeScene);
return;

}

gdjs['Historia2Code'] = gdjs.Historia2Code;
