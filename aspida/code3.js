gdjs.Historia1Code = {};
gdjs.Historia1Code.GDInterfaz_95VidaVaciaObjects1= [];
gdjs.Historia1Code.GDInterfaz_95VidaVaciaObjects2= [];
gdjs.Historia1Code.GDInterfaz_95VidaObjects1= [];
gdjs.Historia1Code.GDInterfaz_95VidaObjects2= [];
gdjs.Historia1Code.GDInterfaz_95ScoreObjects1= [];
gdjs.Historia1Code.GDInterfaz_95ScoreObjects2= [];
gdjs.Historia1Code.GDInterfaz_95PocionObjects1= [];
gdjs.Historia1Code.GDInterfaz_95PocionObjects2= [];
gdjs.Historia1Code.GDInterfaz_95MunicionObjects1= [];
gdjs.Historia1Code.GDInterfaz_95MunicionObjects2= [];
gdjs.Historia1Code.GDMunicionObjects1= [];
gdjs.Historia1Code.GDMunicionObjects2= [];
gdjs.Historia1Code.GDPocionesObjects1= [];
gdjs.Historia1Code.GDPocionesObjects2= [];
gdjs.Historia1Code.GDScoreObjects1= [];
gdjs.Historia1Code.GDScoreObjects2= [];
gdjs.Historia1Code.GDBarraUIObjects1= [];
gdjs.Historia1Code.GDBarraUIObjects2= [];
gdjs.Historia1Code.GDSolo1VidaObjects1= [];
gdjs.Historia1Code.GDSolo1VidaObjects2= [];
gdjs.Historia1Code.GDFondoCastillo0Objects1= [];
gdjs.Historia1Code.GDFondoCastillo0Objects2= [];
gdjs.Historia1Code.GDFondoCastillo1Objects1= [];
gdjs.Historia1Code.GDFondoCastillo1Objects2= [];
gdjs.Historia1Code.GDFondoBosque1Objects1= [];
gdjs.Historia1Code.GDFondoBosque1Objects2= [];
gdjs.Historia1Code.GDFondoCastillo2Objects1= [];
gdjs.Historia1Code.GDFondoCastillo2Objects2= [];
gdjs.Historia1Code.GDFondoBosque2Objects1= [];
gdjs.Historia1Code.GDFondoBosque2Objects2= [];
gdjs.Historia1Code.GDFondoCastillo3Objects1= [];
gdjs.Historia1Code.GDFondoCastillo3Objects2= [];
gdjs.Historia1Code.GDFondoBosque3Objects1= [];
gdjs.Historia1Code.GDFondoBosque3Objects2= [];
gdjs.Historia1Code.GDFondoCastillo4Objects1= [];
gdjs.Historia1Code.GDFondoCastillo4Objects2= [];
gdjs.Historia1Code.GDFondoBosque4Objects1= [];
gdjs.Historia1Code.GDFondoBosque4Objects2= [];
gdjs.Historia1Code.GDBordeCastillo2Objects1= [];
gdjs.Historia1Code.GDBordeCastillo2Objects2= [];
gdjs.Historia1Code.GDBordeCastillo1Objects1= [];
gdjs.Historia1Code.GDBordeCastillo1Objects2= [];
gdjs.Historia1Code.GDSueloCastilloObjects1= [];
gdjs.Historia1Code.GDSueloCastilloObjects2= [];
gdjs.Historia1Code.GDSueloBosqueObjects1= [];
gdjs.Historia1Code.GDSueloBosqueObjects2= [];
gdjs.Historia1Code.GDEnemyShootObjects1= [];
gdjs.Historia1Code.GDEnemyShootObjects2= [];
gdjs.Historia1Code.GDEnemyWalkObjects1= [];
gdjs.Historia1Code.GDEnemyWalkObjects2= [];
gdjs.Historia1Code.GDEnemyFlyObjects1= [];
gdjs.Historia1Code.GDEnemyFlyObjects2= [];
gdjs.Historia1Code.GDEnemyBalaObjects1= [];
gdjs.Historia1Code.GDEnemyBalaObjects2= [];
gdjs.Historia1Code.GDGoRightObjects1= [];
gdjs.Historia1Code.GDGoRightObjects2= [];
gdjs.Historia1Code.GDGoLeftObjects1= [];
gdjs.Historia1Code.GDGoLeftObjects2= [];
gdjs.Historia1Code.GDBackgroundObjectsObjects1= [];
gdjs.Historia1Code.GDBackgroundObjectsObjects2= [];
gdjs.Historia1Code.GDPantallaMueresObjects1= [];
gdjs.Historia1Code.GDPantallaMueresObjects2= [];
gdjs.Historia1Code.GDPlayerObjects1= [];
gdjs.Historia1Code.GDPlayerObjects2= [];
gdjs.Historia1Code.GDProtaBalaObjects1= [];
gdjs.Historia1Code.GDProtaBalaObjects2= [];
gdjs.Historia1Code.GDMeleeObjects1= [];
gdjs.Historia1Code.GDMeleeObjects2= [];
gdjs.Historia1Code.GDMeleeBossObjects1= [];
gdjs.Historia1Code.GDMeleeBossObjects2= [];
gdjs.Historia1Code.GDNPCObjects1= [];
gdjs.Historia1Code.GDNPCObjects2= [];
gdjs.Historia1Code.GDTimerObjects1= [];
gdjs.Historia1Code.GDTimerObjects2= [];
gdjs.Historia1Code.GDNPC_95Text222Objects1= [];
gdjs.Historia1Code.GDNPC_95Text222Objects2= [];
gdjs.Historia1Code.GDPulsaCObjects1= [];
gdjs.Historia1Code.GDPulsaCObjects2= [];
gdjs.Historia1Code.GDNPC_95Text2222Objects1= [];
gdjs.Historia1Code.GDNPC_95Text2222Objects2= [];
gdjs.Historia1Code.GDNPC_95Text22Objects1= [];
gdjs.Historia1Code.GDNPC_95Text22Objects2= [];
gdjs.Historia1Code.GDNPC_95Text2Objects1= [];
gdjs.Historia1Code.GDNPC_95Text2Objects2= [];
gdjs.Historia1Code.GDNPC_95TextObjects1= [];
gdjs.Historia1Code.GDNPC_95TextObjects2= [];
gdjs.Historia1Code.GDNPC_95Text3Objects1= [];
gdjs.Historia1Code.GDNPC_95Text3Objects2= [];
gdjs.Historia1Code.GDMuroObjects1= [];
gdjs.Historia1Code.GDMuroObjects2= [];
gdjs.Historia1Code.GDTimerObjects1= [];
gdjs.Historia1Code.GDTimerObjects2= [];

gdjs.Historia1Code.conditionTrue_0 = {val:false};
gdjs.Historia1Code.condition0IsTrue_0 = {val:false};
gdjs.Historia1Code.condition1IsTrue_0 = {val:false};


gdjs.Historia1Code.mapOfGDgdjs_46Historia1Code_46GDPantallaMueresObjects1Objects = Hashtable.newFrom({"PantallaMueres": gdjs.Historia1Code.GDPantallaMueresObjects1});
gdjs.Historia1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Historia1Code.condition0IsTrue_0.val = false;
{
gdjs.Historia1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Historia1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Historia1Code.GDPlayerObjects1);
gdjs.Historia1Code.GDPantallaMueresObjects1.length = 0;

{for(var i = 0, len = gdjs.Historia1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Historia1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setGravity(0);
}
}{for(var i = 0, len = gdjs.Historia1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Historia1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxFallingSpeed(0, false);
}
}{for(var i = 0, len = gdjs.Historia1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Historia1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCurrentFallSpeed(0);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Historia1Code.mapOfGDgdjs_46Historia1Code_46GDPantallaMueresObjects1Objects, -(1920), -(1080), "FondosParalax");
}{for(var i = 0, len = gdjs.Historia1Code.GDPantallaMueresObjects1.length ;i < len;++i) {
    gdjs.Historia1Code.GDPantallaMueresObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.Historia1Code.GDPantallaMueresObjects1.length ;i < len;++i) {
    gdjs.Historia1Code.GDPantallaMueresObjects1[i].setWidth(2 * gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.Historia1Code.GDPantallaMueresObjects1.length ;i < len;++i) {
    gdjs.Historia1Code.GDPantallaMueresObjects1[i].setHeight(2 * gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.Historia1Code.GDPantallaMueresObjects1.length ;i < len;++i) {
    gdjs.Historia1Code.GDPantallaMueresObjects1[i].setZOrder(10);
}
}{for(var i = 0, len = gdjs.Historia1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Historia1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Historia1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Historia1Code.GDPlayerObjects1[i].flipX(true);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Sonidos\\Historia1.wav", 1, true, 80, 1);
}}

}


{


gdjs.Historia1Code.condition0IsTrue_0.val = false;
{
gdjs.Historia1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if (gdjs.Historia1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel1", true);
}}

}


};

gdjs.Historia1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Historia1Code.GDInterfaz_95VidaVaciaObjects1.length = 0;
gdjs.Historia1Code.GDInterfaz_95VidaVaciaObjects2.length = 0;
gdjs.Historia1Code.GDInterfaz_95VidaObjects1.length = 0;
gdjs.Historia1Code.GDInterfaz_95VidaObjects2.length = 0;
gdjs.Historia1Code.GDInterfaz_95ScoreObjects1.length = 0;
gdjs.Historia1Code.GDInterfaz_95ScoreObjects2.length = 0;
gdjs.Historia1Code.GDInterfaz_95PocionObjects1.length = 0;
gdjs.Historia1Code.GDInterfaz_95PocionObjects2.length = 0;
gdjs.Historia1Code.GDInterfaz_95MunicionObjects1.length = 0;
gdjs.Historia1Code.GDInterfaz_95MunicionObjects2.length = 0;
gdjs.Historia1Code.GDMunicionObjects1.length = 0;
gdjs.Historia1Code.GDMunicionObjects2.length = 0;
gdjs.Historia1Code.GDPocionesObjects1.length = 0;
gdjs.Historia1Code.GDPocionesObjects2.length = 0;
gdjs.Historia1Code.GDScoreObjects1.length = 0;
gdjs.Historia1Code.GDScoreObjects2.length = 0;
gdjs.Historia1Code.GDBarraUIObjects1.length = 0;
gdjs.Historia1Code.GDBarraUIObjects2.length = 0;
gdjs.Historia1Code.GDSolo1VidaObjects1.length = 0;
gdjs.Historia1Code.GDSolo1VidaObjects2.length = 0;
gdjs.Historia1Code.GDFondoCastillo0Objects1.length = 0;
gdjs.Historia1Code.GDFondoCastillo0Objects2.length = 0;
gdjs.Historia1Code.GDFondoCastillo1Objects1.length = 0;
gdjs.Historia1Code.GDFondoCastillo1Objects2.length = 0;
gdjs.Historia1Code.GDFondoBosque1Objects1.length = 0;
gdjs.Historia1Code.GDFondoBosque1Objects2.length = 0;
gdjs.Historia1Code.GDFondoCastillo2Objects1.length = 0;
gdjs.Historia1Code.GDFondoCastillo2Objects2.length = 0;
gdjs.Historia1Code.GDFondoBosque2Objects1.length = 0;
gdjs.Historia1Code.GDFondoBosque2Objects2.length = 0;
gdjs.Historia1Code.GDFondoCastillo3Objects1.length = 0;
gdjs.Historia1Code.GDFondoCastillo3Objects2.length = 0;
gdjs.Historia1Code.GDFondoBosque3Objects1.length = 0;
gdjs.Historia1Code.GDFondoBosque3Objects2.length = 0;
gdjs.Historia1Code.GDFondoCastillo4Objects1.length = 0;
gdjs.Historia1Code.GDFondoCastillo4Objects2.length = 0;
gdjs.Historia1Code.GDFondoBosque4Objects1.length = 0;
gdjs.Historia1Code.GDFondoBosque4Objects2.length = 0;
gdjs.Historia1Code.GDBordeCastillo2Objects1.length = 0;
gdjs.Historia1Code.GDBordeCastillo2Objects2.length = 0;
gdjs.Historia1Code.GDBordeCastillo1Objects1.length = 0;
gdjs.Historia1Code.GDBordeCastillo1Objects2.length = 0;
gdjs.Historia1Code.GDSueloCastilloObjects1.length = 0;
gdjs.Historia1Code.GDSueloCastilloObjects2.length = 0;
gdjs.Historia1Code.GDSueloBosqueObjects1.length = 0;
gdjs.Historia1Code.GDSueloBosqueObjects2.length = 0;
gdjs.Historia1Code.GDEnemyShootObjects1.length = 0;
gdjs.Historia1Code.GDEnemyShootObjects2.length = 0;
gdjs.Historia1Code.GDEnemyWalkObjects1.length = 0;
gdjs.Historia1Code.GDEnemyWalkObjects2.length = 0;
gdjs.Historia1Code.GDEnemyFlyObjects1.length = 0;
gdjs.Historia1Code.GDEnemyFlyObjects2.length = 0;
gdjs.Historia1Code.GDEnemyBalaObjects1.length = 0;
gdjs.Historia1Code.GDEnemyBalaObjects2.length = 0;
gdjs.Historia1Code.GDGoRightObjects1.length = 0;
gdjs.Historia1Code.GDGoRightObjects2.length = 0;
gdjs.Historia1Code.GDGoLeftObjects1.length = 0;
gdjs.Historia1Code.GDGoLeftObjects2.length = 0;
gdjs.Historia1Code.GDBackgroundObjectsObjects1.length = 0;
gdjs.Historia1Code.GDBackgroundObjectsObjects2.length = 0;
gdjs.Historia1Code.GDPantallaMueresObjects1.length = 0;
gdjs.Historia1Code.GDPantallaMueresObjects2.length = 0;
gdjs.Historia1Code.GDPlayerObjects1.length = 0;
gdjs.Historia1Code.GDPlayerObjects2.length = 0;
gdjs.Historia1Code.GDProtaBalaObjects1.length = 0;
gdjs.Historia1Code.GDProtaBalaObjects2.length = 0;
gdjs.Historia1Code.GDMeleeObjects1.length = 0;
gdjs.Historia1Code.GDMeleeObjects2.length = 0;
gdjs.Historia1Code.GDMeleeBossObjects1.length = 0;
gdjs.Historia1Code.GDMeleeBossObjects2.length = 0;
gdjs.Historia1Code.GDNPCObjects1.length = 0;
gdjs.Historia1Code.GDNPCObjects2.length = 0;
gdjs.Historia1Code.GDTimerObjects1.length = 0;
gdjs.Historia1Code.GDTimerObjects2.length = 0;
gdjs.Historia1Code.GDNPC_95Text222Objects1.length = 0;
gdjs.Historia1Code.GDNPC_95Text222Objects2.length = 0;
gdjs.Historia1Code.GDPulsaCObjects1.length = 0;
gdjs.Historia1Code.GDPulsaCObjects2.length = 0;
gdjs.Historia1Code.GDNPC_95Text2222Objects1.length = 0;
gdjs.Historia1Code.GDNPC_95Text2222Objects2.length = 0;
gdjs.Historia1Code.GDNPC_95Text22Objects1.length = 0;
gdjs.Historia1Code.GDNPC_95Text22Objects2.length = 0;
gdjs.Historia1Code.GDNPC_95Text2Objects1.length = 0;
gdjs.Historia1Code.GDNPC_95Text2Objects2.length = 0;
gdjs.Historia1Code.GDNPC_95TextObjects1.length = 0;
gdjs.Historia1Code.GDNPC_95TextObjects2.length = 0;
gdjs.Historia1Code.GDNPC_95Text3Objects1.length = 0;
gdjs.Historia1Code.GDNPC_95Text3Objects2.length = 0;
gdjs.Historia1Code.GDMuroObjects1.length = 0;
gdjs.Historia1Code.GDMuroObjects2.length = 0;
gdjs.Historia1Code.GDTimerObjects1.length = 0;
gdjs.Historia1Code.GDTimerObjects2.length = 0;

gdjs.Historia1Code.eventsList0(runtimeScene);
return;

}

gdjs['Historia1Code'] = gdjs.Historia1Code;
