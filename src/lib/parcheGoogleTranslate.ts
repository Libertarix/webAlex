// Google Translate (activado por TranslateButton.tsx) reescribe el DOM por
// su cuenta envolviendo texto en <font> y reordenando nodos. Cuando React
// intenta luego actualizar o desmontar uno de esos nodos que Google ya
// movió, `removeChild`/`insertBefore` nativos lanzan
// "NotFoundError: Failed to execute 'removeChild' on 'Node'" y la app entera
// se cae con una pantalla en blanco. Es un choque conocido entre Google
// Translate y cualquier framework con virtual DOM (React, Vue...), no un
// bug de este proyecto — el parche estándar es hacer que esas dos
// operaciones no revienten cuando el nodo ya no está donde React cree.
if (typeof Node === "function" && Node.prototype) {
  const removeChildOriginal = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends globalThis.Node>(this: globalThis.Node, child: T): T {
    if (child.parentNode !== this) {
      if (import.meta.env.DEV) {
        console.warn("[parcheGoogleTranslate] removeChild ignorado: el nodo ya no es hijo directo (probablemente reescrito por Google Translate).");
      }
      return child;
    }
    return removeChildOriginal.call(this, child) as T;
  };

  const insertBeforeOriginal = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends globalThis.Node>(
    this: globalThis.Node,
    newNode: T,
    referenceNode: globalThis.Node | null
  ): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (import.meta.env.DEV) {
        console.warn("[parcheGoogleTranslate] insertBefore ignorado: el nodo de referencia ya no es hijo directo (probablemente reescrito por Google Translate).");
      }
      return newNode;
    }
    return insertBeforeOriginal.call(this, newNode, referenceNode) as T;
  };
}
